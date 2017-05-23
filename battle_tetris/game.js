/*
	TODO:
		- turn system
		- projectile aiming and launching
		- tetris block dropping
		- row cancellation
		- game winning and losing
		- more progression and balancing - 40
		
		- user interface - 30
		- music - 15
		- sound effect - 15
	
	LATER TODO:
		- more interesting map with more tile type and more stuff
		- wind system for harder aiming
		
*/



function start_game() {
	
	function Trail(x1, y1, x2, y2, size, texture, life) {
		var self = trail_pool.get_new();
		
		x1 += wind_d.x;
		y1 += wind_d.y;
		
		self.loadTexture(texture);
		self.anchor.set(0.5);
		self.x = (x1 + x2) / 2;
		self.y = (y1 + y2) / 2;
		self.width = dist(x1, y1, x2, y2);
		self.height = size;
		self.angle = deg(xy_to_angle(x2 - x1, y2 - y1));
		
		self.life = life;
		self.total_life = life;
		
		self.update = function () {
			if (!self.exists) return;
			
			if (self.life <= 0) {
				self.kill();
				return;
			}
			
			self.x += wind_d.x;
			self.y += wind_d.y;
			
			self.alpha = self.life / self.total_life;
			self.life -= game.time.physicsElapsed;
		}
		
		return self;
	}
	
	function get_tetris_form_min_max(form) {
		var min_x = 9999;
		var min_y = 9999;
		var max_x = -9999;
		var max_y = -9999;
		for (var i = 0; i < 4; ++i) {
			min_x = Math.min(min_x, form[i][0]);
			max_x = Math.max(max_x, form[i][0]);
			min_y = Math.min(min_y, form[i][1]);
			max_y = Math.max(max_y, form[i][1]);
		}
		return {
			min_x: min_x,
			min_y: min_y,
			max_x: max_x,
			max_y: max_y,
			center_x: (min_x + max_x) / 2,
			center_y: (min_y + max_y) / 2,
		};
	}
	
	function TetrisBlockUI(block_form, block_rotation, color) {
		var self = game.add.group(ui_group);
		
		for (var i = 0; i < 4; ++i) {
			self.create(0, 0, 'tiles', 0);
		}
		
		self.cycle_form = function () {
			var new_rotation = self.block_rotation + 1;
			if (new_rotation >= self.block_form.length) {
				new_rotation = 0;
			}
			self.set_form(self.block_form, new_rotation, self.color);
		}
		
		self.set_form = function (block_form, block_rotation, color) {
			if (color === undefined) color = random_int(colors);
			
			self.color = color;
			
			self.block_form = block_form;
			self.block_rotation = block_rotation;
			self.current_form = block_form[block_rotation];
			
			self.form_data = get_tetris_form_min_max(self.current_form);
			
			for (var i = 0; i < 4; ++i) {
				var tile = self.children[i];
				tile.anchor.set(0.5);
				tile.x = (self.current_form[i][0] - self.form_data.center_x) * world_tile_size;
				tile.y = (self.current_form[i][1] - self.form_data.center_y) * world_tile_size;
				
				tile.loadTexture('tiles', color);
			}
		}
		
		self.spawn_tetris_block = function (x, y) {
			return TetrisBlock(x, y, 0, 1, self.block_form, self.block_rotation, self.color);
		}
		
		if (block_form !== undefined && block_rotation !== undefined && color !== undefined) {
			self.set_form(block_form, block_rotation, color);
		}
		
		return self;
	}
	
	function TetrisBlock(x, y, dx, dy, block_form, block_rotation, color) {
		var self = new Object();
		
		self.x = x;
		self.y = y;
		if (color === undefined) color = random_int(colors);
		self.color = color;
		
		self.last_drawn_x = [null, null, null, null];
		self.last_drawn_y = [null, null, null, null];
		
		self.move_delay = 0.1;
		self.move_delay_timer = 0.0;
		
		self.dx = dx;
		self.dy = dy;
		self.stopped = false;
		
		self.move = function (dx, dy) {
			if (dx === 0 && dy === 0) return;
			self.x += dx;
			self.y += dy;
			if (!self.redraw()) {
				self.move(-dx, -dy);
				return false;
			}
			
			for (var i = 0; i < 4; ++i) {
				var current_x = self.current_form[i][0] + self.x;
				var current_y = self.current_form[i][1] + self.y;
				for (var j = 0; j < player_list.length; ++j) {
					var player = player_list[j];
					if (layer.getTileX(player.x) == current_x && layer.getTileY(player.y) == current_y) {
						player.custom_kill();
					}
				}
			}
			
			return true;
		}
		
		self.set_form = function (block_form, block_rotation) {
			
			var old_block_form = self.block_form;
			var old_rotation = self.block_rotation;

			self.block_form = block_form;
			self.block_rotation = block_rotation;
			self.current_form = block_form[block_rotation];
			self.form_data = get_tetris_form_min_max(self.current_form);
			
			self.x = clamp(self.x, -self.form_data.min_x, world_width - 1 - self.form_data.max_x);
			
			if (!self.redraw()) {
				self.set_form(old_block_form, old_rotation);
			}
		}
		
		self.cycle_form = function () {
			var new_rotation = self.block_rotation + 1;
			if (new_rotation >= self.block_form.length) {
				new_rotation = 0;
			}
			self.set_form(self.block_form, new_rotation);
		}
		
		self.redraw = function () {
			for (var i = 0; i < 4; ++i) {
				if (self.last_drawn_x[i] !== null) {
					if (self.last_drawn_y[i] >= 0) {
						tilemap.removeTile(self.last_drawn_x[i], self.last_drawn_y[i], layer);
					}
				}
			}
			for (var i = 0; i < 4; ++i) {
				var current_x = self.current_form[i][0] + self.x;
				var current_y = self.current_form[i][1] + self.y;
				if (tilemap.getTile(current_x, current_y, layer) || current_y >= world_height) {
					return false;
				}
				if (current_y >= 0) {
					tilemap.putTile(self.color, current_x, current_y, layer);
				}
				self.last_drawn_x[i] = current_x;
				self.last_drawn_y[i] = current_y;
			}
			
			return true;
		}
		
		self.set_form(block_form, block_rotation);
		
		self.update = function () {
			if (self.move_delay_timer >= self.move_delay) {
				if (!self.stopped && !self.move(self.dx, self.dy)){
					self.stopped = true;
				}
				self.move_delay_timer -= self.move_delay;
			}
			
			self.move_delay_timer += game.time.physicsElapsed;
		}
		
		return self;
	}
	
	var tetris_block_forms = [
		[
			// ****
			[
				[-1, 0],
				[0, 0],
				[1, 0],
				[2, 0],
			],
			[
				[0, -1],
				[0, 0],
				[0, 1],
				[0, 2],
			],
		],
		[
			// *
			// ***
			[
				[-1, -1],
				[-1, 0],
				[0, 0],
				[1, 0],
			],
			[
				[1, -1],
				[0, -1],
				[0, 0],
				[0, 1],
			],
			[
				[-1, 0],
				[0, 0],
				[1, 0],
				[1, 1],
			],
			[
				[0, -1],
				[0, 0],
				[0, 1],
				[-1, 1],
			],
		],
		[
			//  *
			// ***
			[
				[-1, 0],
				[0, -1],
				[1, 0],
				[0, 0],
			],
			[
				[0, -1],
				[1, 0],
				[0, 1],
				[0, 0],
			],
			[
				[-1, 0],
				[1, 0],
				[0, 1],
				[0, 0],
			],
			[
				[-1, 0],
				[0, -1],
				[0, 1],
				[0, 0],
			],
		],
		[
			//   *
			// ***
			[
				[1, -1],
				[-1, 0],
				[0, 0],
				[1, 0],
			],
			[
				[1, 1],
				[0, -1],
				[0, 0],
				[0, 1],
			],
			[
				[-1, 0],
				[0, 0],
				[1, 0],
				[-1, 1],
			],
			[
				[0, -1],
				[0, 0],
				[0, 1],
				[-1, -1],
			],
		],
		[
			//  **
			// **
			[
				[-1, 1],
				[0, 1],
				[0, 0],
				[1, 0],
			],
			[
				[0, -1],
				[0, 0],
				[1, 0],
				[1, 1],
			],
		],
		[
			// **
			//  **
			[
				[-1, 0],
				[0, 0],
				[0, 1],
				[1, 1],
			],
			[
				[1, -1],
				[1, 0],
				[0, 0],
				[0, 1],
			],
		],
		[
			// **
			// **
			[
				[0, 0],
				[0, 1],
				[1, 0],
				[1, 1],
			],
		],
	]
	
	var player_starting_pos = [
		0.2,
		0.8,
	];
	var player_initial_angle = [
		rad(-45),
		rad(-135),
	]
	var player_texture_suffix = [
		'1',
		'2',
	]
	var player_initial_force = 300;
	var player_min_force = 100;
	var player_max_force = 600;
	var player_force_change = 400;
	var player_min_angle = rad(-180);
	var player_max_angle = rad(0);
	var player_angle_change = rad(45);
	var player_keys = [
		{
			up: Phaser.KeyCode.W,
			down: Phaser.KeyCode.S,
			left: Phaser.KeyCode.A,
			right: Phaser.KeyCode.D,
			fire: Phaser.KeyCode.F,
			rotate: Phaser.KeyCode.R,
		},
		{
			up: Phaser.KeyCode.UP,
			down: Phaser.KeyCode.DOWN,
			left: Phaser.KeyCode.LEFT,
			right: Phaser.KeyCode.RIGHT,
			fire: Phaser.KeyCode.NUMPAD_0,
			rotate: Phaser.KeyCode.NUMPAD_1,
		},
	];
	function Player(index, texture, keys, initial_angle, initial_force, texture_suffix) {
		var self = player_group.create(0, 0, texture);
		
		self.index = index;
		
		self.arrow = player_ui_group.create(0, 0, 'arrow');
		self.arrow.anchor.set(0.5);
		self.arrow.scale.set(0.5);
		
		self.anchor.set(0.5);
		self.scale.set(0.5);
		
		self.body.bounce.set(0.5);
		self.body.gravity.set(0, 250);
		self.body.collideWorldBounds = true;
		
		self.friction_air = 0.01;
		self.friction_ground = 0.1;
		self.max_speed_air = 60;
		self.max_speed_ground = 60;
		self.jump_acc = 200;
		
		self.ready = false;
		
		self.on_floor = false;
		
		self.aim_angle = initial_angle;
		self.aim_force = initial_force;
		
		self.keys = keys;
		self.texture_suffix = texture_suffix;
		
		self.state = 'aiming'; // moving, aiming, waiting
		
		self.move = function(x) {
			if (self.on_floor) {
				self.body.velocity.x += x * self.max_speed_ground * self.friction_ground;
			}
			else {
				self.body.velocity.x += x * self.max_speed_air * self.friction_air;
			}
		};
		
		self.jump = function () {
			if (!self.on_floor) return;
			self.body.velocity.y = -self.jump_acc;
		}
		
		self.custom_kill = function () {
			self.ready = false;
			self.arrow.kill();
			self.kill();
		}
		
		self.launch_projectile = function () {
			Projectile(self.x, self.y, self.aim_angle, self.aim_force, self.texture_suffix, self);
			self.ready = false;
		}
		
		var temp_point = {x: 0, y: 0};
		self.aim_arrow = function () {
			angle_to_point(temp_point, self.aim_angle, self.aim_force * 0.1 + 20);
			temp_point.x += self.x;
			temp_point.y += self.y;
			self.arrow.reset(temp_point.x, temp_point.y);
			self.arrow.angle = deg(self.aim_angle);
		}
		
		self.update = function () {
			if (!self.exists) return;
			
			self.on_floor = self.body.onFloor();
			
			if (self.ready) {
				self.arrow.tint = 0x00ff00;
			}
			else {
				self.arrow.tint = 0xffffff;
			}
			
			if (self.state === 'moving') {
				if (input_manager.is_key_holding(self.keys.up)) {
					self.jump();
				}
				if (input_manager.is_key_holding(self.keys.left)) {
					self.move(-1.0);
				}
				if (input_manager.is_key_holding(self.keys.right)) {
					self.move(1.0);
				}
				
				self.arrow.kill();
			}
			else if (self.state === 'aiming') {
				if (!self.ready) {
					if (input_manager.is_key_holding(self.keys.up)) {
						self.aim_force = clamp(self.aim_force + player_force_change * game.time.physicsElapsed, player_min_force, player_max_force);
					}
					if (input_manager.is_key_holding(self.keys.down)) {
						self.aim_force = clamp(self.aim_force - player_force_change * game.time.physicsElapsed, player_min_force, player_max_force);
					}
					if (input_manager.is_key_holding(self.keys.left)) {
						self.aim_angle = clamp(self.aim_angle - player_angle_change * game.time.physicsElapsed, player_min_angle, player_max_angle);
					}
					if (input_manager.is_key_holding(self.keys.right)) {
						self.aim_angle = clamp(self.aim_angle + player_angle_change * game.time.physicsElapsed, player_min_angle, player_max_angle);
					// Vicky
					}
					if (input_manager.is_key_pressed_once(self.keys.rotate)) {
						ui_tetris_blocks[self.index].cycle_form();
					}
				}
				if (input_manager.is_key_pressed_once(self.keys.fire)) {
					self.ready = !self.ready;
				}
				self.aim_arrow();
			}
			
			if (self.on_floor) {
				self.body.velocity.x *= 1.0 - self.friction_ground;
			}
			else {
				self.body.velocity.x *= 1.0 - self.friction_air;
			}
		}
		
		return self;
	}
	
	function Projectile(x, y, angle, force, texture_suffix, host) {
		var self = projectile_group.create(x, y, 'projectile' + texture_suffix);
		
		self.anchor.set(0.5);
		self.scale.set(0.4, 0.5);
		
		self.host = host;
		
		self.texture_suffix = texture_suffix;
		
		self.body.gravity.set(0, 250);
		self.body.collideWorldBounds = false;
		
		angle_to_point(self.body.velocity, angle, force);
		
		self.last_pos = {x: x, y: y};
		
		self.collision = function () {
			if (!in_world_bounds(self.x, self.y)) {
				self.on_collision();
			}
			else if (game.physics.arcade.collide(self, layer)) {
				self.on_collision();
			}
		}
		
		self.on_collision = function () {
			mark_target(layer.getTileX(self.x), self.host.index);

			emit_particle(self.x, self.y, 4, spark_emitter, 'particle' + self.texture_suffix);
			emit_particle(self.x, self.y, 1, flash_emitter, 'explosion' + self.texture_suffix);
			self.destroy();
		}
		
		self.update = function () {
			Trail(self.last_pos.x, self.last_pos.y, self.x, self.y, 12.0, 'trail' + self.texture_suffix, 1.5);
			self.angle = deg(xy_to_angle(self.x - self.last_pos.x, self.y - self.last_pos.y));
			self.last_pos.x = self.x;
			self.last_pos.y = self.y;
			
			self.collision();
		}
		
		return self;
	}

	var game = new Phaser.Game(960, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
	
	var cursors;
	
	var input_manager;

	var tilemap;
	var layer;
	
	var map_data;
	
	var ui_group;
	
	var spark_emitter;
	var flash_emitter;
	
	var world_tile_size       = 20;
	var world_width;
	var world_height;
	var max_particles          = 200;
	var spark_lifespan         = 200;
	var spark_scale            = 0.75;
	var spark_speed            = 750;
	var spark_drag             = 5000;
	var flash_lifespan         = 100;
	var flash_scale            = 2.0;
	var flash_speed            = 0;
	var flash_drag             = 0;
	
	var bullet_pool_min_count = 100;
	
	var wind_speed = 10;
	var wind_angle = 0;
	var wind_angle_delta = rad(36);
	var wind_d = {x: 0, y: 0};
	
	var colors = 25;
	
	var trail_pool;
	
	var turn_state;
	var turn_progess;
	
	var projectile_group;
	
	var player_group;
	var player_ui_group;
	
	var player_list = [];
	var current_player = 0;
	
	var tetris_blocks = [];
	
	function preload() {
		game.load.image('platform', 'images/platform.png');
		game.load.image('player1', 'images/player1.png');
		game.load.image('player2', 'images/player2.png');
		game.load.image('trail1', 'images/trail1.png');
		game.load.image('trail2', 'images/trail2.png');
		game.load.image('particle1', 'images/particle1.png');
		game.load.image('particle2', 'images/particle2.png');
		game.load.image('explosion1', 'images/explosion1.png');
		game.load.image('explosion2', 'images/explosion2.png');
		game.load.image('projectile1', 'images/projectile1.png');
		game.load.image('projectile2', 'images/projectile2.png');
		game.load.image('arrow', 'images/arrow.png');
		
		game.load.bitmapFont('gem', 'fonts/gem.png', 'fonts/gem.xml');
	}
	
	function create_tile_layer(name, width, height, tile_width, tile_height, tint) {
		var layer = tilemap.createBlankLayer(name, width, height, tile_width, tile_height);
		layer.tint = tint;
		return layer;
	} 
	
	function emit_particle(x, y, num, emitter, texture) {
		for (var i = 0; i < num; ++i) {
			emitter.emitParticle(x, y, texture);
		}
	}
	
	function make_emitter(lifespan, scale, speed, drag) {
		var emitter = game.add.emitter(0, 0, max_particles);
		emitter.makeParticles('particle1');
		emitter.setRotation(0, 0);
		emitter.setAlpha(1.0, 0.0, lifespan, Phaser.Easing.Sinusoidal.In);
		emitter.setScale(scale, scale / 2, scale, scale / 2, lifespan);
		emitter.setXSpeed(-speed, speed);
		emitter.setYSpeed(-speed, speed);
		emitter.particleDrag.setTo(drag, drag);
		emitter.lifespan = lifespan;
		
		return emitter;
	}
	
	function enable_layer_collision(layer) {
		tilemap.setCollisionByExclusion([], true, layer);
	}
	
	function get_tile(x, y, layer) {
		return tilemap.getTileWorldXY(x, y, world_tile_size, world_tile_size, layer);
	}
	
	function randomize_tile_layer(layer, num_tile_types) {
		for (var i = 0; i < world_width; ++i) {
			for (var j = 0; j < world_height; ++j) {
				if (random_chance(0.01)) {
					tilemap.putTile(random_int(num_tile_types), i, j, layer);
				}
			}
		}
	}
	
	function in_bounds(x, y, width, height) {
		return x >= 0 && x < width && y >= 0 && y < height;
	}
	
	function in_world_bounds(x, y) {
		return x >= 0 && x < game.world.width && y >= 0 && y < game.world.height;
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
	function has_floor_neighbour(map_data, x, y, width, height, ignore_x, ignore_y, directions) {
		if (ignore_x === undefined) ignore_x = x;
		if (ignore_y === undefined) ignore_y = y;
		if (directions === undefined) directions = directions_all;
		for (var i = 0; i < directions.length; ++i) {
			var direction = directions[i];
			if (get_map_data(map_data, x + direction[0], y + direction[1], width, height) === 1) {
				if (x + direction[0] !== ignore_x || y + direction[1] !== ignore_y) return true;
			}
		}
		
		return false;
	}
	
	function update_wind() {
		angle_to_point(wind_d, wind_angle, wind_speed * game.time.physicsElapsed);
		wind_angle = (wind_angle + wind_angle_delta * game.time.physicsElapsed) % (Math.PI * 2);
	}
	
	function tile_to_x(tile_x, tile_width) {
		return tile_x * tile_width + (tile_width / 2);
	}
	function tile_to_y(tile_y, tile_height) {
		return tile_y * tile_height + (tile_height / 2);
	}
	
	function rgba_format(r, g, b, a) {
		r = Math.floor(clamp(r, 0, 255));
		g = Math.floor(clamp(g, 0, 255));
		b = Math.floor(clamp(b, 0, 255));
		a = clamp(a, 0, 1.0);
		return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	}
	
	function generate_tileset(tile_size) {
		var bmd = game.make.bitmapData(tile_size * 25, tile_size);

		var colors = Phaser.Color.HSVColorWheel();

		var i = 0;
		
		var shade_size = 2;
		var border_size = 1;
		var color_mul = 1.5;
		
		var color_str_shade = rgba_format(0, 0, 0, 0.4);
		var color_str_border = rgba_format(255, 255, 255, 1.0);

		for (var x = 0; x < 25; x++)
		{
			var color = colors[i];
			var color_str = rgba_format(color.r * color_mul, color.g * color_mul, color.b * color_mul, 1.0);
			bmd.rect(x * tile_size, 0, tile_size, tile_size, color_str_border);
			bmd.rect(x * tile_size + border_size, border_size, tile_size - border_size * 2, tile_size - border_size * 2, color_str);
			bmd.rect(x * tile_size + shade_size + border_size, shade_size + border_size, tile_size - shade_size - border_size * 2, tile_size - shade_size - border_size * 2, color_str_shade);
			i += 12;
		}

		tilemap.addTilesetImage('tiles', bmd, tile_size, tile_size);
		game.cache.addSpriteSheet('tiles', '', bmd.canvas, tile_size, tile_size);
	}

	function create() {
		world_width  = Math.ceil(game.width / world_tile_size);
		world_height = Math.ceil(game.height / world_tile_size);

		input_manager = InputManager(game);

		game.stage.backgroundColor = '#222222';
		
		cursors = game.input.keyboard.createCursorKeys();

		tilemap = game.add.tilemap();
		generate_tileset(world_tile_size);
		var l = tilemap.create('tilemap', world_width, world_height, world_tile_size, world_tile_size);
		l.resizeWorld();
		
		layer = create_tile_layer('layer', world_width, world_height, world_tile_size, world_tile_size, 0xffffff);
		
		enable_layer_collision(layer);
		
		map_data = create_2d_array(world_width, world_height);
		
		spark_emitter = make_emitter(spark_lifespan, spark_scale, spark_speed, spark_drag);
		flash_emitter = make_emitter(flash_lifespan, flash_scale, flash_speed, flash_drag);
		
		trail_pool = SpritePool(game, bullet_pool_min_count, null, false);
		
		player_ui_group = game.add.group();
		
		projectile_group = game.add.group();
		projectile_group.enableBody = true;
		projectile_group.physicsBodyType = Phaser.Physics.ARCADE;
		
		player_group = game.add.group();
		player_group.enableBody = true;
		player_group.physicsBodyType = Phaser.Physics.ARCADE;
		player_list.push(Player(0, 'player1', player_keys[0], player_initial_angle[0], player_initial_force, player_texture_suffix[0]));
		player_list.push(Player(1, 'player2', player_keys[1], player_initial_angle[1], player_initial_force, player_texture_suffix[1]));
		
		ui_group = game.add.group();
		ui_group.fixedToCamera = true;
		
		var ui_block = ui_group.create(0, 0, 'platform');
		ui_block.width = game.width;
		ui_block.height = 100;
		ui_block.tint = 0x000000;
		ui_block.alpha = 0.5;
		
		ui_tetris_blocks.push(TetrisBlockUI());
		ui_tetris_blocks[0].x = 50;
		ui_tetris_blocks[0].y = 50;
		ui_tetris_blocks.push(TetrisBlockUI());
		ui_tetris_blocks[1].x = game.width - 50;
		ui_tetris_blocks[1].y = 50;
		
		game_start();
	}
	
	var b1;
	var b2;
	var b3;
	function game_start() {
		
		current_player = 0;
		
		turn_state = 'aiming';
		
		target_marks_left = 0;
		target_marks = [];
		
		tetris_blocks = [];
		
		for (var i = 0; i < player_list.length; ++i) {
			var player = player_list[i];
			player.reset(player_starting_pos[i] * game.world.width, game.world.height - 100);
			player.state = turn_state;
		}
		
		generate_tetris_blocks();
		
	}
	
	function camera_follow(target, teleport) {
		if (teleport) {
			game.camera.focusOn(target);
		}
		game.camera.follow(target);
		game.camera.lerp.setTo(camera_lerp, camera_lerp);
	}
	
	function ui_update() {
		
	}
	
	function player_collision() {
		game.physics.arcade.collide(player_group, layer);
		game.physics.arcade.collide(player_group);
	}
	
	var target_marks_left = 0;
	var target_marks = [];
	var ui_tetris_blocks = [];

	function mark_target(tile_x, index) {
		target_marks_left--;
		target_marks.push({tile_x: tile_x, index: index});
		// console.log('target marked: ', tile_x);
	}
	
	function generate_tetris_blocks() {
		for (var i = 0; i < player_list.length; ++i) {
			ui_tetris_blocks[i].set_form(random_select_array(tetris_block_forms), 0);
		}
	}
	
	function turn_logic() {
		if (turn_state === 'moving') {
			var ready = true;
			for (var i = 0; i < tetris_blocks.length; ++i) {
				if (!tetris_blocks[i].stopped) {
					ready = false;
					break;
				}
			}
			
			if (ready) {
				turn_state = 'aiming';
			}
		}
		else if (turn_state === 'aiming') {
			var ready = true;
			for (var i = 0; i < player_list.length; ++i) {
				var player = player_list[i];
				if (!player.ready) {
					ready = false;
					break;
				}
			}
			
			if (ready) {
				for (var i = 0; i < player_list.length; ++i) {
					var player = player_list[i];
					player.launch_projectile();
					target_marks_left++;
				}
				target_marks = [];
				turn_state = 'waiting';
			}
		}
		else if (turn_state === 'waiting') {
			if (target_marks_left === 0) {
				for (var i = 0; i < target_marks.length; i++) {
					var target_mark = target_marks[i];
					tetris_blocks.push(ui_tetris_blocks[target_mark.index].spawn_tetris_block(target_mark.tile_x, (-5 * i) - 5));
				}
				generate_tetris_blocks();
				turn_state = 'moving';
			}
		}
		

		for (var i = 0; i < player_list.length; ++i) {
			var player = player_list[i];
			player.state = turn_state;
		}
	}
	
	function update_tetris_blocks() {
		for (var i = 0; i < tetris_blocks.length; ++i) {
			tetris_blocks[i].update();
		}
	}
	
	function update() {
		input_manager.update();
		player_collision();
		update_wind();
		turn_logic();
		update_tetris_blocks();
		ui_update();
	}
	
}
