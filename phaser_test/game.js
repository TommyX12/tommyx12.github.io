/*
	TODO:
		// - projectile launch, trail, hit effect - 35
		// - player hit, trail, death effect - 35
		// - weapon ring animation - 20
		// - path finding - 60
		// - enemies, objective, and progression - 45
		- weapons randomly spawned pick-up with limited ammo and slots for use, Z to fire, C to swap - 30
		- weapons:
			- A - assault rifle - unlimited ammo - 15
			- S - shotgun - 5
			- I - sniper - 5
			- R - single rocket - 5
			- D - dual missile - 30
			- L - missile salvo - 5
			- C - cluster missile - auto-target, ignore player target - 5
			- E - electric shock - melee - 15
		
		- abilities charged through kills, A,S,D to use - 15
		- abilities:
			- stop time with tile wave - 45
		
		- more progression and balancing - 40
		
		- user interface - 30
		- music - 15
		- sound effect - 15
	
	LATER TODO:
		- mini map
		- weapons:
			- M - mine
		
		- abilities:
			- shock wave which also disables projectiles
			- create cover of cool shape
		
		- diep.io stats level up system
		
*/



function start_game() {
	
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
	
	function SpritePool(min_count, physics_type) {
		var self = game.add.group();
		
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

	function Agent(texture_name, faction) {
		var self = agent_group.create(0, 0, texture_name);
		
		self.anchor.set(0.5);
		self.scale.set(0.75);
		self.friction = 0.1;
		self.max_speed = 350;
		self.angular_lerp = 0.35;
		self.angle_dest = 0;
		self.faction = faction;
		game.physics.arcade.enable(self);
		
		self.body.bounce.set(0.5);
		self.body.collideWorldBounds = true;
		
		self.target = null;
		self.target_range = 500;
		
		self.launch_offset = 25.0;
		
		self.hp = 100;
		
		var acc = new Phaser.Point();
		
		self.move = function(x, y) {
			acc.setTo(x, y);
			acc.setMagnitude(self.max_speed * self.friction);
			Phaser.Point.add(self.body.velocity, acc, self.body.velocity);
		}
		
		self.agent_in_range = function (agent, range) {
			return dist_sq(agent.x, agent.y, self.x, self.y) < range * range;
		}
		
		self.is_valid_target = function (agent) {
			return agent.exists && agent.faction != self.faction && self.agent_in_range(agent, self.target_range);
		}
		
		self.cycle_target = function () {
			var valid_targets = [];
			for (var i = 0; i < agent_group.children.length; ++i) {
				var agent = agent_group.children[i];
				if (self.is_valid_target(agent)) {
					valid_targets.push(agent);
				}
			}
			if (valid_targets.length > 0) {
				var found = false;
				for (var i = 0; i < valid_targets.length; ++i) {
					if (valid_targets[i] === self.target) {
						found = true;
						if (i === valid_targets.length - 1) {
							self.target = valid_targets[0];
						}
						else {
							self.target = valid_targets[i + 1];
						}
						break;
					}
				}
				if (!found) {
					self.target = random_select_array(valid_targets);
				}
			}
		}
		
		var rotate_threshold = self.max_speed * 0.5;
		rotate_threshold *= rotate_threshold;
		self.rotate_to_dest = function () {
			if (self.target !== null) {
				self.angle_dest = xy_to_angle(self.target.x - self.x, self.target.y - self.y);
			}
			else if (self.body.velocity.getMagnitudeSq() > rotate_threshold){
				self.angle_dest = xy_to_angle(self.body.velocity.x, self.body.velocity.y);
			}
			self.angle = angular_lerp(self.angle, deg(self.angle_dest), self.angular_lerp, false);
		}
		
		self.custom_update = function () {
			
		}
		
		self.check_target = function () {
			if (self.target === null) {
				self.cycle_target();
			}
			else if (!self.is_valid_target(self.target)) {
				self.target = null;
			}
		}
		
		self.on_death = function () {
			
		}
		
		self.receive_damage = function (damage) {
			emit_particle(self.x, self.y, 2, spark_emitter, 'particle2');
			self.hp -= damage;
			self.check_health();
		}
		
		self.check_health = function () {
			if (self.hp <= 0) {
				if (game.camera.target === self) {
					game.camera.unfollow();
				}
				emit_particle(self.x, self.y, 1, flash_emitter, 'explosion2');
				if (self.faction === 'enemy') {
					enemies_left--;
				}
				self.on_death();
				self.destroy();
			}
		}
		
		self.update = function () {
			if (!self.exists) return;
			self.check_target();
			self.rotate_to_dest();
			self.custom_update();
			
			self.body.velocity.multiply(1.0 - self.friction, 1.0 - self.friction);
		}
		
		return self;
	}
	
	function Player() {
		var self = Agent('player', 'player');
		
		self.crosshair_lerp = 0.5;
		self.crosshair_scale_on = 1.0;
		self.crosshair_scale_off = 2.0;
		
		self.crosshair = game.add.sprite(0, 0, 'crosshair');
		self.crosshair.tint = 0xff4400;
		self.crosshair.anchor.setTo(0.5);
		self.crosshair.alpha = 0.0;
		self.crosshair.scale.setTo(self.crosshair_scale_off);
		
		self.weapon = Gun(self);
		
		self.launch_offset = 25.0;
		
		self.custom_update = function () {
			var x = 0, y = 0;
			if (input_manager.is_key_holding(Phaser.KeyCode.UP)) {
				y -= 1.0;
			}
			if (input_manager.is_key_holding(Phaser.KeyCode.DOWN)) {
				y += 1.0;
			}
			if (input_manager.is_key_holding(Phaser.KeyCode.LEFT)) {
				x -= 1.0;
			}
			if (input_manager.is_key_holding(Phaser.KeyCode.RIGHT)) {
				x += 1.0;
			}
			
			if (input_manager.is_key_pressed_once(Phaser.KeyCode.X)) {
				self.cycle_target();
			}
			
			self.move(x, y);
			
			self.weapon.update();
			if (input_manager.is_key_holding(Phaser.KeyCode.Z)) {
				self.weapon.launch(self.x, self.y, self.target);
			}
			
			if (self.target !== null) {
				if (self.crosshair.alpha < 0.01) {
					self.crosshair.x = self.target.x;
					self.crosshair.y = self.target.y;
				}
				else {
					self.crosshair.x = lerp(self.crosshair.x, self.target.x, self.crosshair_lerp);
					self.crosshair.y = lerp(self.crosshair.y, self.target.y, self.crosshair_lerp);
				}
				self.crosshair.scale.x = lerp(self.crosshair.scale.x, 1.0, self.crosshair_lerp);
				self.crosshair.scale.y = lerp(self.crosshair.scale.y, 1.0, self.crosshair_lerp);
				self.crosshair.alpha = lerp(self.crosshair.alpha, 1.0, self.crosshair_lerp);
			}
			else {
				self.crosshair.scale.x = lerp(self.crosshair.scale.x, 2.0, self.crosshair_lerp);
				self.crosshair.scale.y = lerp(self.crosshair.scale.y, 2.0, self.crosshair_lerp);
				self.crosshair.alpha = lerp(self.crosshair.alpha, 0.0, self.crosshair_lerp);
			}
			
		}
		
		self.on_death = function () {
			self.crosshair.destroy();
		}
		
		return self;
	}
	
	Enemy.threat = 1.0;
	function Enemy() {
		var self = Agent('player', 'enemy');
		
		self.tint = 0xff4422;
		var pos = get_random_floor_pos(map_data, world_width, world_height, world_tile_width, world_tile_height);
		self.x = pos[0];
		self.y = pos[1];
		
		self.max_speed = 200;
		self.target_range = 400;
		
		self.state = 'idle'; // idle, combat
		
		self.weapon = Gun(self);
		self.weapon.total_charge = 2.0;
		
		self.path_finding_dest_x = 0;
		self.path_finding_dest_y = 0;
		self.path_found = null;
		self.path_follow_index = 0;
		self.dest_radius = 32;
		self.random_tile_radius = 3;
		self.finding_path = false;
		self.move_towards = function (x, y) {
			if (!self.arrived_at(x, y)) {
				self.move(x - self.x, y - self.y);
				return false;
			}
			return true;
		}
		
		self.arrived_at = function (x, y) {
			return dist_sq(x, y, self.x, self.y) < self.dest_radius * self.dest_radius;
		}
		
		self.clear_path = function () {
			self.path_found = null;
		}
		
		self.path_find_towards = function (x, y) {
			if (!self.finding_path) {
				if (self.path_found === null) {
					var tile_center_x = layer_floor.getTileX(x);
					var tile_center_y = layer_floor.getTileY(y);
					var random_floor = get_random_floor(map_data, world_width, world_height, tile_center_x, tile_center_y, self.random_tile_radius);
					path_finder.findPath(
						layer_floor.getTileY(self.y),
						layer_floor.getTileX(self.x),
						random_floor[1],
						random_floor[0],
						function (path) {
							self.path_found = path;
							self.finding_path = false;
							self.path_follow_index = 0;
						}
					)
					self.finding_path = true;
				}
				else {
					if (self.path_follow_index < self.path_found.length) {
						var path_point = self.path_found[self.path_follow_index];
						var dest_x = tile_to_x(path_point.y, world_tile_width);
						var dest_y = tile_to_y(path_point.x, world_tile_height);
						if (self.move_towards(dest_x, dest_y)) {
							self.path_follow_index++;
						}
					}
					else {
						self.clear_path();
					}
				}
			}
		}
		
		self.custom_update = function () {
			// self.move(x, y);
			
			self.weapon.update();
			// self.weapon.launch(self.x, self.y, self.target);
			
			if (self.state == 'idle') {
				if (self.target !== null) {
					self.clear_path();
					self.state = 'combat';
				}
				else {
					self.path_find_towards(self.x, self.y);
				}
			}
			
			if (self.state == 'combat') {
				if (self.target !== null) {
					self.path_find_towards(self.target.x, self.target.y);
					self.weapon.launch(self.x, self.y, self.target);
				}
				else {
					self.clear_path();
					self.state = 'idle';
				}
			}
		}
		
		return self;
	}
	
	var enemy_list = [
		Enemy,
	]

	function Bullet(x, y, texture, angle, speed, life, damage, faction) {
		var self = bullet_pool.get_new();
		
		self.loadTexture(texture);
		self.x = x;
		self.y = y;
		self.anchor.set(0.5);
		self.scale.set(0.5);
		angle_to_point(self.body.velocity, angle, speed);
		self.angle = deg(angle);
		
		self.life = life;
		self.total_life = life;
		
		self.damage = damage;
		self.faction = faction;
		
		emit_particle(self.x, self.y, 1, flash_emitter, 'particle');
		
		self.on_agent_collision = function (bullet, agent) {
			if (agent.faction !== self.faction) {
				agent.receive_damage(self.damage);
				self.custom_kill();
			}
		}
		
		self.on_wall_collision = function (bullet, tile) {
			self.custom_kill();
		}
		
		self.on_kill = function () {
			emit_particle(self.x, self.y, 4, spark_emitter, 'particle');
		}
		
		self.custom_kill = function () {
			self.kill();
			self.on_kill();
		}
		
		self.update = function () {
			if (!self.exists) return;
			
			if (self.life <= 0) {
				self.kill();
				return;
			}
			
			// var tile = game.physics.arcade.collide(self, layer_wall) || get_tile(self.x, self.y, layer_wall);
			var tile = get_tile(self.x, self.y, layer_wall);
			if (tile) {
				self.on_wall_collision();
			}
			else {
				game.physics.arcade.overlap(self, agent_group, self.on_agent_collision);
			}
			
			self.alpha = self.life / self.total_life;
			self.life -= game.time.physicsElapsed;
		}
		
		return self;
	}
	
	function Weapon(host) {
		var self = new Object();
		
		self.host = host;
		self.allow_blind_fire = false;
		self.charge = 0.0;
		self.total_charge = 1.0;
		self.get_charge = function () {
			return clamp(charge / total_charge, 0.0, 1.0);
		}
		self.update = function () {
			if (self.charge < self.total_charge) {
				self.charge += game.time.physicsElapsed;
			}
			self.on_update();
		}
		self.launch = function (x, y, target) {
			if (target !== null || self.allow_blind_fire) {
				while (self.charge >= self.total_charge) {
					self.on_launch(x, y, target);
					self.charge -= self.total_charge;
				}
			}
		}
		
		self.on_update = function () {
			
		}
		
		self.on_launch = function (x, y, target) {
			
		}
		
		return self;
	}
	
	function Gun(host) {
		var self = Weapon(host);
		
		self.total_charge = 0.1;
		self.bullet_speed = 1800;
		self.bullet_texture = 'bullet';
		self.bullet_spread = 5;
		self.bullet_life = 0.5;
		self.bullet_size = 0.6;
		self.bullet_damage = 10;
		self.pellets = 1;
		
		var temp_point = new Phaser.Point(0, 0);
		self.on_launch = function (x, y, target) {
			var angle = xy_to_angle(target.x - x, target.y - y);
			angle_to_point(temp_point, angle, host.launch_offset);
			for (var i = 0; i < self.pellets; ++i) {
				var spread = rad(random_range(-self.bullet_spread, self.bullet_spread));
				var bullet = Bullet(
					x + temp_point.x,
					y + temp_point.y,
					self.bullet_texture,
					angle + spread,
					self.bullet_speed,
					self.bullet_life,
					self.bullet_damage,
					host.faction
				);
				bullet.scale.set(self.bullet_size);
			}
		}
		
		return self;
	}
	
	AssaultRifle.icon = 'assault_rifle_icon';
	AssaultRifle.pickup_ammo = 0;
	function AssaultRifle(host) {
		var self = Gun(host);
		
		self.total_charge = 0.1;
		self.bullet_speed = 1800;
		self.bullet_spread = 5;
		self.bullet_texture = 'bullet';
		self.bullet_life = 0.5;
		self.bullet_size = 0.6;
		self.bullet_damage = 10;
		self.pellets = 1;
		
		return self;
	}
	
	Shotgun.icon = 'shotgun_icon';
	Shotgun.pickup_ammo = 0;
	function Shotgun(host) {
		var self = Gun(host);
		
		self.total_charge = 0.1;
		self.bullet_speed = 1800;
		self.bullet_spread = 5;
		self.bullet_texture = 'bullet';
		self.bullet_life = 0.5;
		self.bullet_size = 0.6;
		self.bullet_damage = 10;
		self.pellets = 1;
		
		return self;
	}
	
	Shotgun.icon = 'shotgun_icon';
	Shotgun.pickup_ammo = 0;
	function Sniper(host) {
	
	}
	
	function RocketLauncher(host) {
	
	}
	
	function DualMissile(host) {
	
	}
	
	function MissileSalvo(host) {
	
	}
	
	function ClusterMissile(host) {
	
	}
	
	function ElectricShock(host) {
	
	}
	
	var weapon_list = [
		AssaultRifle,
		Shotgun,
		Sniper,
		RocketLauncher,
		DualMissile,
		MissileSalvo,
		ClusterMissile,
		ElectricShock,
	]
	
	var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
	
	var cursors;
	
	var input_manager;

	var tilemap;
	var layer_floor;
	var layer_wall;
	// var layer_back_decor1;
	// var layer_back_decor2;
	
	var agent_group;
	var player;
	
	var map_data;
	
	var bullet_pool;
	
	var spark_emitter;
	var flash_emitter;
	var explosion_emitter;
	
	var current_wave;
	var enemies_left;
	
	var path_finder = new EasyStar.js();
	
	var world_width            = 128;
	var world_height           = 128;
	var world_tile_width       = 64;
	var world_tile_height      = 64;
	var bullet_pool_min_count  = 50;
	var max_particles          = 200;
	var spark_lifespan         = 200;
	var spark_scale            = 0.75;
	var spark_speed            = 750;
	var spark_drag             = 5000;
	var flash_lifespan         = 100;
	var flash_scale            = 2.0;
	var flash_speed            = 0;
	var flash_drag             = 0;
	var explosion_lifespan     = 250;
	var explosion_scale        = 3.0;
	var explosion_speed        = 0;
	var explosion_drag         = 0;
	var path_finder_iterations = 10;
	var random_walk_steps      = 2048;
	
	var camera_lerp = 0.05;
	
	function preload() {
		game.load.image('block', 'images/block.png');
		game.load.image('player', 'images/player.png');
		game.load.image('star', 'images/star.png');
		game.load.image('crosshair', 'images/crosshair.png');
		game.load.image('bullet', 'images/bullet.png');
		game.load.image('particle', 'images/particle.png');
		game.load.image('particle2', 'images/particle2.png');
		game.load.image('explosion', 'images/explosion.png');
		game.load.image('explosion2', 'images/explosion2.png');
	}
	
	/* function create_tile_layer(name, width, height, tile_width, tile_height, depth, tint) {
		var total_width = width * tile_width;
		var total_height = height * tile_height;
		var depth_scale = 1.0 / depth;
		var width_in_tiles = Math.ceil(width * depth);
		var height_in_tiles = Math.ceil(height * depth);
		var layer = tilemap.createBlankLayer(name, width_in_tiles, height_in_tiles, tile_width, tile_height);
		layer.tint = tint;
		layer.scale.set(depth_scale);
		layer.scrollFactorX = layer.scrollFactorY = depth_scale;
		layer.width_in_tiles = width_in_tiles;
		layer.height_in_tiles = height_in_tiles;
		
		randomize_tile_layer(layer);
		
		return layer;
	} */
	
	
	function emit_particle(x, y, num, emitter, texture) {
		for (var i = 0; i < num; ++i) {
			emitter.emitParticle(x, y, texture);
		}
	}
	
	function make_emitter(lifespan, scale, speed, drag) {
		var emitter = game.add.emitter(0, 0, max_particles);
		emitter.makeParticles('particle');
		emitter.setRotation(0, 0);
		emitter.setAlpha(1.0, 0.0, lifespan, Phaser.Easing.Sinusoidal.In);
		emitter.setScale(scale, scale / 2, scale, scale / 2, lifespan);
		emitter.setXSpeed(-speed, speed);
		emitter.setYSpeed(-speed, speed);
		emitter.particleDrag.setTo(drag, drag);
		emitter.lifespan = lifespan;
		
		return emitter;
	}

	function create_tile_layer(name, width, height, tile_width, tile_height, tint) {
		var layer = tilemap.createBlankLayer(name, width, height, tile_width, tile_height);
		layer.tint = tint;
		return layer;
	} 
	
	function enable_layer_collision(layer) {
		tilemap.setCollisionByExclusion([], true, layer);
	}
	
	function get_tile(x, y, layer) {
		return tilemap.getTileWorldXY(x, y, world_tile_width, world_tile_height, layer);
	}
	
	function randomize_tile_layer(layer) {
		for (var i = 0; i < world_width; ++i) {
			for (var j = 0; j < world_height; ++j) {
				if (random_chance(0.01)) {
					tilemap.putTile(0, i, j, layer);
				}
			}
		}
	}
	
	function in_bounds(x, y, width, height) {
		return x >= 0 && x < width && y >= 0 && y < height;
	}

	function get_map_data(map_data, x, y, width, height) {
		if (!in_bounds(x, y, width, height)) {
			return 0;
		}
		return map_data[x][y];
	}
	
	var directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	function random_walk(width, height, steps, start_x, start_y) {
		var array = create_2d_array(width, height, 0);
		
		var temp_dir = random_select_array(directions);
		var last_delta = [temp_dir[0], temp_dir[1]];
		while (steps--) {
			array[start_x][start_y] = 1;
			var valid_directions = directions.slice();
			valid_directions.push(last_delta);
			for (var i = 0; i < valid_directions.length; ++i) {
				if (!in_bounds(start_x + valid_directions[i][0], start_y + valid_directions[i][1], width, height)) {
					valid_directions.splice(i, 1);
					--i;
				}
			}
			if (valid_directions.length > 0) {
				var direction = random_select_array(valid_directions);
				
				start_x += direction[0];
				start_y += direction[1];
				
				last_delta[0] = direction[0];
				last_delta[1] = direction[1];
			}
		}
		
		var center_x = Math.floor(width / 2);
		var center_y = Math.floor(height / 2);
		var min_x = width;
		var min_y = height;
		var max_x = 0;
		var max_y = 0;
		for (var i = 0; i < width; ++i) {
			for (var j = 0; j < height; ++j) {
				if (array[i][j] > 0) {
					min_x = Math.min(min_x, i);
					min_y = Math.min(min_y, j);
					max_x = Math.max(max_x, i);
					max_y = Math.max(max_y, j);
				}
			}
		}
		var shift_x = Math.floor((min_x + max_x) / 2) - center_x;
		var shift_y = Math.floor((min_y + max_y) / 2) - center_y;
		var array_shifted = create_2d_array(width, height, 0);
		for (var i = 0; i < width; ++i) {
			for (var j = 0; j < height; ++j) {
				array_shifted[i][j] = get_map_data(array, i + shift_x, j + shift_y, width, height);
			}
		}
		
		return array_shifted;
	}
	
	var directions_all = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
		[-1, 1],
		[1, -1],
		[1, 1],
		[-1, -1],
	];
	function has_floor_neighbour(map_data, x, y, width, height) {
		for (var i = 0; i < directions_all.length; ++i) {
			var direction = directions_all[i];
			if (get_map_data(map_data, x + direction[0], y + direction[1], width, height) === 1) {
				return true;
			}
		}
		
		return false;
	}
	
	function generate_map() {
		// randomize_tile_layer(layer_wall);
		var start_x = random_int(world_width);
		var start_y = random_int(world_height);
		var map_data = random_walk(world_width, world_height, random_walk_steps, start_x, start_y);
		for (var i = 0; i < world_width; ++i) {
			for (var j = 0; j < world_height; ++j) {
				if (map_data[i][j] > 0) {
					tilemap.putTile(0, i, j, layer_floor);
				}
				else if (has_floor_neighbour(map_data, i, j, world_width, world_height)) {
					tilemap.putTile(0, i, j, layer_wall);
				}
			}
		}
		enable_layer_collision(layer_wall);
		
		return map_data;
	}
	
	function spawn_wave(wave) {
		enemies_left = 0;
		var total_threat = 5.0 + (wave - 1) * 1.0;
		while (total_threat > 0) {
			var valid_enemies = []
			for (var i = 0; i < enemy_list.length; ++i) {
				var enemy = enemy_list[i];
				if (enemy.threat <= total_threat) {
					valid_enemies.push(enemy);
				}
			}
			
			var selected_enemy = random_select_array(valid_enemies);
			total_threat -= selected_enemy.threat;
			selected_enemy();
			
			enemies_left++;
		}
	}
	
	function tile_to_x(tile_x, tile_width) {
		return tile_x * tile_width + (tile_width / 2);
	}
	function tile_to_y(tile_y, tile_height) {
		return tile_y * tile_height + (tile_height / 2);
	}
	function get_random_floor_pos(map_data, width, height, tile_width, tile_height, bound_center_x, bound_center_y, bound_radius) {
		var random_floor = get_random_floor(map_data, width, height, bound_center_x, bound_center_y, bound_radius);
		if (random_floor !== null) {
			return [tile_to_x(random_floor[0], tile_width), tile_to_y(random_floor[1], tile_height)];
		}
		
		return null;
	}

	function get_random_floor(map_data, width, height, bound_center_x, bound_center_y, bound_radius) {
		var count = 0;
		var bound_min_x;
		var bound_min_y;
		var bound_max_x;
		var bound_max_y;
		if (bound_center_x !== undefined) {
			bound_min_x = clamp(bound_center_x - bound_radius, 0, width - 1);
			bound_min_y = clamp(bound_center_y - bound_radius, 0, height - 1);
			bound_max_x = clamp(bound_center_x + bound_radius, 0, width - 1);
			bound_max_y = clamp(bound_center_y + bound_radius, 0, height - 1);
		}
		else {
			bound_min_x = 0;
			bound_min_y = 0;
			bound_max_x = width - 1;
			bound_max_y = height - 1;
		}
		for (var i = bound_min_x; i <= bound_max_x; ++i) {
			for (var j = bound_min_y; j <= bound_max_y; ++j) {
				if (map_data[i][j] == 1) {
					count++;
				}
			}
		}
		if (count === 0) return null;
		var selection = random_int(count);
		count = 0;
		for (var i = bound_min_x; i <= bound_max_x; ++i) {
			for (var j = bound_min_y; j <= bound_max_y; ++j) {
				if (map_data[i][j] == 1) {
					if (count === selection) {
						return [i, j];
					}
					count++;
				}
			}
		}
	}

	function create() {
		input_manager = InputManager(game);

		game.stage.backgroundColor = '#dddddd';
		
		cursors = game.input.keyboard.createCursorKeys();

		tilemap = game.add.tilemap();
		tilemap.addTilesetImage('block', null, world_tile_width, world_tile_height);
		var l = tilemap.create('tilemap', world_width, world_height, world_tile_width, world_tile_height);
		l.resizeWorld();
		
		// layer_back_decor2 = create_tile_layer('layer_back_decor2', world_width, world_height, world_tile_width, world_tile_height, 2, 0x888888);
		
		// layer_back_decor1 = create_tile_layer('layer_back_decor1', world_width, world_height, world_tile_width, world_tile_height, 1.5, 0xaaaaaa);
		
		layer_floor = create_tile_layer('layer_floor', world_width, world_height, world_tile_width, world_tile_height, 0xffffff);
		
		layer_wall = create_tile_layer('layer_wall', world_width, world_height, world_tile_width, world_tile_height, 0x3388ff);
		
		map_data = generate_map();
		path_finder.setGrid(map_data);
		path_finder.setAcceptableTiles([1]);
		path_finder.setIterationsPerCalculation(path_finder_iterations);
		
		agent_group = game.add.group();
		
		player = Player();
		var starting_tile_pos = get_random_floor_pos(map_data, world_width, world_height, world_tile_width, world_tile_height);
		player.x = starting_tile_pos[0];
		player.y = starting_tile_pos[1];
		
		camera_follow(player, true);
		
		bullet_pool = SpritePool(bullet_pool_min_count, Phaser.Physics.ARCADE);
		
		spark_emitter = make_emitter(spark_lifespan, spark_scale, spark_speed, spark_drag);

		flash_emitter = make_emitter(flash_lifespan, flash_scale, flash_speed, flash_drag);
		
		explosion_emitter = make_emitter(explosion_lifespan, explosion_scale, explosion_speed, explosion_drag);
		explosion_emitter.setScale(explosion_scale / 2, explosion_scale, explosion_scale / 2, explosion_scale, explosion_lifespan);
		
		current_wave = 1;
		spawn_wave(current_wave);
	}
	
	function camera_follow(target, teleport) {
		if (teleport) {
			game.camera.focusOn(target);
		}
		game.camera.follow(target);
		game.camera.lerp.setTo(camera_lerp, camera_lerp);
	}
	
	function agent_collision() {
		game.physics.arcade.collide(agent_group, layer_wall);
		game.physics.arcade.collide(agent_group);
	}
	
	function wave_check() {
		if (enemies_left <= 0) {
			current_wave++;
			spawn_wave(current_wave);
		}
	}
	
	function update() {
		input_manager.update();
		agent_collision();
		path_finder.calculate();
		wave_check();
	}
	
}
