/*
	TODO:
		- more progression and balancing - 40
		
		- basic user interface - 30
		- music - 15
		- sound effect - 15
	
	LATER TODO:
		- more interesting map with more tile type and more stuff
		
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
	
	function TetrisBlock(x, y, block_form, rotation) {
		var self = new Object();
		
		self.x = x;
		self.y = y;
		self.color = random_int(colors);
		
		self.last_drawn_x = [null, null, null, null];
		self.last_drawn_y = [null, null, null, null];
		
		self.move = function (dx, dy) {
			if (dx === 0 && dy === 0) return;
			self.x += dx;
			self.y += dy;
			if (!self.redraw()) {
				self.move(-dx, -dy);
			}
		}
		
		self.set_form = function (block_form, rotation) {
			
			var old_block_form = self.block_form;
			var old_rotation = self.rotation;

			self.block_form = block_form;
			self.rotation = rotation;
			self.current_form = block_form[rotation];
			
			if (!self.redraw()) {
				self.set_form(old_block_form, old_rotation);
			}
		}
		
		self.cycle_form = function () {
			self.rotation++;
			if (self.rotation >= self.block_form.length) {
				self.rotation = 0;
			}
			self.set_form(self.block_form, self.rotation);
		}
		
		self.redraw = function () {
			for (var i = 0; i < 4; ++i) {
				if (self.last_drawn_x[i] !== null);
				tilemap.removeTile(self.last_drawn_x[i], self.last_drawn_y[i], layer);
			}
			for (var i = 0; i < 4; ++i) {
				var current_x = self.current_form[i][0] + self.x;
				var current_y = self.current_form[i][1] + self.y;
				if (tilemap.getTile(current_x, current_y, layer)) {
					return false;
				}
				tilemap.putTile(self.color, current_x, current_y, layer);
				self.last_drawn_x[i] = current_x;
				self.last_drawn_y[i] = current_y;
			}
			
			return true;
		}
		
		self.set_form(block_form, rotation);
		
		return self;
	}
	
	var tetris_blocks = [
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

	var game = new Phaser.Game(960, 720, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
	
	var cursors;
	
	var input_manager;

	var tilemap;
	var layer;
	
	var map_data;
	
	var ui_group;
	
	var world_tile_size       = 20;
	var world_width;
	var world_height;
	
	var bullet_pool_min_count = 100;
	
	var wind_speed = 125;
	var wind_angle = 0;
	var wind_angle_delta = rad(36);
	var wind_d = {x: 0, y: 0};
	
	var colors = 25;
	
	var trail_pool;
	
	function preload() {
		game.load.image('platform', 'images/platform.png');
		
		game.load.bitmapFont('gem', 'fonts/gem.png', 'fonts/gem.xml');
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
		
		trail_pool = SpritePool(game, bullet_pool_min_count, null, true);
		
		ui_group = game.add.group();
		ui_group.fixedToCamera = true;
		
		var ui_block = ui_group.create(0, 0, 'platform');
		ui_block.width = game.width;
		ui_block.height = 70;
		ui_block.tint = 0x000000;
		ui_block.alpha = 0.5;
		
		game_start();
	}
	
	var b1;
	var b2;
	var b3;
	function game_start() {
		
		b1 = TetrisBlock(5, 5, tetris_blocks[0], 0);
		b2 = TetrisBlock(15, 15, tetris_blocks[1], 0);
		b3 = TetrisBlock(25, 25, tetris_blocks[2], 2);
		
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
	
	function update() {
		input_manager.update();
		update_wind();
		ui_update();
		
		if (input_manager.is_key_pressed_once(Phaser.KeyCode.UP)) {
			b1.move(0, -1);
		}
		if (input_manager.is_key_pressed_once(Phaser.KeyCode.DOWN)) {
			b1.move(0, 1);
		}
		if (input_manager.is_key_pressed_once(Phaser.KeyCode.LEFT)) {
			b1.move(-1, 0);
		}
		if (input_manager.is_key_pressed_once(Phaser.KeyCode.RIGHT)) {
			b1.move(1, 0);
		}
		if (input_manager.is_key_pressed_once(Phaser.KeyCode.SPACEBAR)) {
			b1.cycle_form();
		}
	}
	
}
