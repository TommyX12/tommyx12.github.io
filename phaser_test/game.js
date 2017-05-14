/*
	TODO:
		- mini map
		- projectile launch, trail, hit effect
		- player hit, trail, death effect
		- weapon ring animation
		- navigation mesh, possibly need to modify map size
		- enemies and progression
		- music
		- sound effect
		- user interface
		- weapons: randomly spawned pick-up with limited ammo and slots for use, Z to fire, C to swap
			- A - assault rifle - unlimited ammo
			- S - shotgun
			- I - sniper
			- R - single rocket
			// - A - rocket salvo
			- D - dual missile
			- L - missile salvo
			- C - cluster missile - auto-target, ignore player target
			- M - mine
			- E - melee
		
		- abilities: charged through kills, A,S,D to use
			- stop time with tile wave
			- create cover of cool shape
			- shock wave which also disables projectiles
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
		self.scale.set(0.5);
		self.acceleration = 35;
		self.friction = 0.9;
		self.faction = faction;
		game.physics.arcade.enable(self);
		
		self.body.bounce.set(0.5);
		self.body.collideWorldBounds = true;
		
		self.target = null;
		self.target_range = 400;
		self.target_range_sq = self.target_range * self.target_range;
		
		self.launch_offset = 25.0;
		
		self.hp = 100;
		
		var acc = new Phaser.Point();
		
		self.move = function(x, y) {
			acc.setTo(x, y);
			acc.setMagnitude(self.acceleration);
			Phaser.Point.add(self.body.velocity, acc, self.body.velocity);
			
			self.body.velocity.multiply(self.friction, self.friction);
		}
		
		self.agent_in_range = function (agent) {
			return dist_sq(agent.x, agent.y, self.x, self.y) < self.target_range_sq;
		}
		
		self.is_valid_target = function (agent) {
			return agent.exists && agent.faction != self.faction && self.agent_in_range(agent);
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
			self.hp -= damage;
			self.check_health();
		}
		
		self.check_health = function () {
			if (self.hp <= 0) {
				self.on_death();
				self.destroy();
			}
		}
		
		self.update = function () {
			self.custom_update();
			self.check_target();
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
		
		self.ability = Gun(self);
		
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
			
			self.ability.update();
			if (input_manager.is_key_holding(Phaser.KeyCode.Z)) {
				self.ability.launch(self.x, self.y, self.target);
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
	
	function Enemy() {
		var self = Agent('player', 'enemy');
		
		self.tint = 0xff4422;
		var pos = get_random_floor_pos(map_data, world_width, world_height, world_tile_width, world_tile_height);
		self.x = pos[0];
		self.y = pos[1];
		
		return self;
	}
	
	function Ability(host) {
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
		var self = Ability(host);
		
		self.total_charge = 0.1;
		self.bullet_speed = 1800;
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
	
	function Bullet(x, y, angle, speed, life, damage, faction) {
		var self = bullet_pool.get_new();
		
		self.loadTexture('bullet');
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
			
		}
		
		self.custom_kill = function () {
			self.kill();
			self.on_kill();
		}
		
		self.update = function () {
			if (self.life <= 0) {
				self.kill();
				return;
			}
			
			game.physics.arcade.overlap(self, agent_group, self.on_agent_collision);
			// var tile = game.physics.arcade.collide(self, layer_wall) || get_tile(self.x, self.y, layer_wall);
			var tile = get_tile(self.x, self.y, layer_wall);
			if (tile) {
				self.on_wall_collision();
			}
			
			self.alpha = self.life / self.total_life;
			self.life -= game.time.physicsElapsed;
		}
		
		return self;
	}
	
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
	
	var world_width       = 128;
	var world_height      = 128;
	var world_tile_width  = 64;
	var world_tile_height = 64;
	var bullet_pool_min_count = 50;
	
	var camera_lerp = 0.05;
	
	function preload() {
		game.load.image('block', 'images/block.png');
		game.load.image('player', 'images/player.png');
		game.load.image('star', 'images/star.png');
		game.load.image('crosshair', 'images/crosshair.png');
		game.load.image('bullet', 'images/bullet.png');
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
		var map_data = random_walk(world_width, world_height, 2048, start_x, start_y);
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
	
	function tile_to_x(tile_x, tile_width) {
		return tile_x * tile_width + (tile_width / 2);
	}
	function tile_to_y(tile_y, tile_height) {
		return tile_y * tile_height + (tile_height / 2);
	}
	function get_random_floor_pos(map_data, width, height, tile_width, tile_height) {
		var count = 0;
		for (var i = 0; i < width; ++i) {
			for (var j = 0; j < height; ++j) {
				if (map_data[i][j] == 1) {
					count++;
				}
			}
		}
		var selection = random_int(count);
		count = 0;
		for (var i = 0; i < width; ++i) {
			for (var j = 0; j < height; ++j) {
				if (map_data[i][j] == 1) {
					if (count === selection) {
						return [tile_to_x(i, tile_width), tile_to_y(j, tile_height)];
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
		
		agent_group = game.add.group();
		
		player = Player();
		var starting_tile_pos = get_random_floor_pos(map_data, world_width, world_height, world_tile_width, world_tile_height);
		player.x = starting_tile_pos[0];
		player.y = starting_tile_pos[1];
		
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		Enemy();
		
		camera_follow(player, true);
		
		bullet_pool = SpritePool(bullet_pool_min_count, Phaser.Physics.ARCADE);
		
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
	
	function update() {
		input_manager.update();
		agent_collision();
	}
	
}
