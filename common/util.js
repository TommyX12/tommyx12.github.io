
function random_range(min, max) {
	return min + Math.random() * (max - min);
}

function random_int(max) {
	return Math.floor(Math.random() * max);
}

function random_chance(chance) {
	return Math.random() < chance;
}

function dist_sq(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return dx * dx + dy * dy;
}

function dist(x1, y1, x2, y2) {
	return Math.sqrt(dist_sq(x1, y1, x2, y2));
}

function angle_to_point(point, angle, magnitude) {
	point.x = Math.cos(angle) * magnitude;
	point.y = Math.sin(angle) * magnitude;
}

function bezier_quadratic(t, p0, p1, p2, out) {
	if (out === undefined) out = {x:0, y:0};
	out.x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
	out.y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
	return out;
}

function bezier_cubic(t, p0, p1, p2, p3, out) {
	if (out === undefined) out = {x:0, y:0};
	out.x = (1-t)*(1-t)*(1-t)*p0.x + 3*(1-t)*(1-t)*t*p1.x + 3*(1-t)*t*t*p2.x + t*t*t*p3.x;
	out.y = (1-t)*(1-t)*(1-t)*p0.y + 3*(1-t)*(1-t)*t*p1.y + 3*(1-t)*t*t*p2.y + t*t*t*p3.y;
	return out;
}

function xy_to_angle(x, y) {
	return Math.atan2(y, x);
}

function angle_delta(start, end, use_radians) {
	if (use_radians === undefined) use_radians = true;
	
	var cap = use_radians ? Math.PI * 2 : 360;
	var dif = (end - start) % cap;
	if (dif != dif % (cap / 2)) {
		dif = (dif < 0) ? dif + cap : dif - cap;
	}
	return dif;
}

function angular_lerp(a, b, x, use_radians) {
	return a + angle_delta(a, b, use_radians) * x;
}

function deg(rad) {
	return rad / Math.PI * 180;
}

function rad(deg) {
	return deg / 180 * Math.PI;
}

function lerp(a, b, x) {
	return a + (b - a) * x;
}

function clamp(x, min, max) {
	if (x < min) return min;
	if (x > max) return max;
	return x;
}

function create_2d_array(size1, size2, initial_value) {
	var array = []
	for (var i = 0; i < size1; ++i) {
		var row = []
		for (var j = 0; j < size2; ++j) {
			row.push(initial_value);
		}
		array.push(row);
	}
	
	return array;
}

function random_select_array(array) {
	if (array.length === 0) return null;
	
	return array[random_int(array.length)];
}

function InputManager(game) {
	
	function InputHelper() {
		
		var self = new Object();
		
		self.pressed_detected  = {};
		self.released_detected = {};
		self.pressed_once      = {};
		self.holding           = {};
		self.released_once     = {};
		
		self.any_pressed_once  = false;
		self.any_released_once = false;
		self.any_holding       = false;
		
		self.pressed = function (key) {
			key = key.toString();
			if (self.holding[key] !== true) {
				self.pressed_detected[key] = true;
			}
		}
		
		self.released = function (key) {
			key = key.toString();
			if (self.holding[key] === true) {
				self.released_detected[key] = true;
			}
		}
		
		self.is_pressed_once = function (key) {
			key = key.toString();
			return self.pressed_once.hasOwnProperty(key) ? self.pressed_once[key] : false;
		}
		
		self.is_released_once = function (key) {
			key = key.toString();
			return self.released_once.hasOwnProperty(key) ? self.released_once[key] : false;
		}
		
		self.is_holding = function (key) {
			key = key.toString();
			return self.holding.hasOwnProperty(key) ? self.holding[key] : false;
		}
		
		self.is_any_pressed_once = function () {
			return self.any_pressed_once;
		}
		
		self.is_any_released_once = function () {
			return self.any_released_once;
		}
		
		self.is_any_holding = function () {
			return self.any_holding;
		}
		
		self.update = function () {
			for (var key in self.pressed_once) {
				if (self.pressed_once.hasOwnProperty(key)) {
					self.pressed_once[key] = false;
				}
			}
			self.any_pressed_once = false;
			
			for (var key in self.released_once) {
				if (self.released_once.hasOwnProperty(key)) {
					self.released_once[key] = false;
				}
			}
			self.any_released_once = false;
			
			for (var key in self.pressed_detected) {
				if (self.pressed_detected.hasOwnProperty(key)) {
					if (self.pressed_detected[key] === true) {
						self.pressed_once[key] = true;
						self.any_pressed_once = true;
						self.pressed_detected[key] = false;
						self.holding[key] = true;
					}
				}
			}
			
			for (var key in self.released_detected) {
				if (self.released_detected.hasOwnProperty(key)) {
					if (self.released_detected[key] === true) {
						self.released_once[key] = true;
						self.any_released_once = true;
						self.released_detected[key] = false;
						self.holding[key] = false;
					}
				}
			}
			
			self.any_holding = false;
			for (var key in self.holding) {
				if (self.holding.hasOwnProperty(key)) {
					if (self.holding[key] === true) {
						self.any_holding = true;
						break;
					}
				}
			}
		}
		
		return self;

	}
	
	var self = new Object();
	
	self.mouse_helper    = InputHelper();
	self.key_helper      = InputHelper();
	
	self.mouse_pressed = function () {
		self.mouse_helper.pressed(0);
	}
	
	self.mouse_released = function () {
		self.mouse_helper.released(0);
	}
	
	self.key_pressed = function (event) {
		self.key_helper.pressed(event.keyCode);
	}
	
	self.key_released = function (event) {
		self.key_helper.released(event.keyCode);
	}
	
	self.update = function () {
		self.mouse_helper.update();
		self.key_helper.update();
	}
	
	self.is_mouse_pressed_once = function () {
		return self.mouse_helper.is_pressed_once(0);
	}
	
	self.is_mouse_released_once = function () {
		return self.mouse_helper.is_released_once(0);
	}
	
	self.is_mouse_holding = function () {
		return self.mouse_helper.is_holding(0);
	}
	
	self.is_key_pressed_once = function (key) {
		return self.key_helper.is_pressed_once(key);
	}
	
	self.is_key_released_once = function (key) {
		return self.key_helper.is_released_once(key);
	}
	
	self.is_key_holding = function (key) {
		return self.key_helper.is_holding(key);
	}
	
	self.is_any_mouse_pressed_once = function () {
		return self.mouse_helper.is_any_pressed_once();
	}
	
	self.is_any_mouse_released_once = function () {
		return self.mouse_helper.is_any_released_once();
	}
	
	self.is_any_mouse_holding = function () {
		return self.mouse_helper.is_any_holding();
	}
	
	self.is_any_key_pressed_once = function () {
		return self.key_helper.is_any_pressed_once();
	}
	
	self.is_any_key_released_once = function () {
		return self.key_helper.is_any_released_once();
	}
	
	self.is_any_key_holding = function () {
		return self.key_helper.is_any_holding();
	}
	
	game.input.onDown.add(self.mouse_pressed);
	game.input.onUp.add(self.mouse_released);
	game.input.keyboard.onDownCallback = self.key_pressed;
	game.input.keyboard.onUpCallback = self.key_released;
	
	return self;

}

function SpritePool(game, min_count, physics_type, use_batching) {
	if (use_batching === undefined) use_batching = false;
	var self = use_batching ? game.add.spriteBatch() : game.add.group();
	
	self.min_count = Math.max(0, min_count);
	if (physics_type != null) {
		self.enableBody = true;
		self.physicsBodyType = physics_type;
	}
	self.createMultiple(min_count);
	// self.setAll('checkWorldBounds', true);
	// self.setAll('outOfBoundsKill', true);
	
	self.auto_destroy_delay = 60; // in frames
	self.auto_destroy_delay_timer = 0;
	
	self.get_new = function () {
		var sprite;
		if (self.countDead() > 0) {
			sprite = self.getFirstDead();
		}
		else {
			sprite = self.create(0, 0);
		}
		sprite.reset(0, 0);
		return sprite;
	}
	
	self.update_children = function () {
		for (var i = 0; i < self.children.length; ++i) {
			self.children[i].update();
		}
	}
	
	self.update = function () {
		if (self.auto_destroy_delay > 0 && self.auto_destroy_delay_timer >= self.auto_destroy_delay) {
			if (self.countDead() > self.min_count) {
				self.getFirstDead().destroy();
			}
			self.auto_destroy_delay_timer = 0;
		}
		self.auto_destroy_delay_timer++;
		
		self.update_children();
	}
	
	return self;
}

