
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


function Player(game) {
	var self = game.add.sprite(0, 0, 'star');
	
	self.game = game;
	self.anchor.setTo(0.5, 0.5);
	game.physics.arcade.enable(self);
	
	return self;
}


function start_game() {
	
	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
	
	var cursors;
	
	var input_manager;

	var tilemap;
	var layer_floor;
	var layer_wall;
	// var layer_back_decor1;
	// var layer_back_decor2;
	
	var player;
	
	var world_width       = 128;
	var world_height      = 128;
	var world_tile_width  = 32;
	var world_tile_height = 32;
	
	var camera_lerp = 0.05;
	
	function preload() {
		game.load.image('block', 'images/block.png');
		game.load.image('star', 'images/star.png');
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
	
	function randomize_tile_layer(layer) {
		for (var i = 0; i < world_width; ++i) {
			for (var j = 0; j < world_height; ++j) {
				if (random_chance(0.01)) {
					tilemap.putTile(0, i, j, layer);
				}
			}
		}
	}

	function create() {
		
		input_manager = InputManager(game);

		game.stage.backgroundColor = '#dddddd';
		
		cursors = game.input.keyboard.createCursorKeys();

		tilemap = game.add.tilemap();
		tilemap.addTilesetImage('block');
		var l = tilemap.create('tilemap', world_width, world_height, world_tile_width, world_tile_height);
		l.resizeWorld();
		
		// layer_back_decor2 = create_tile_layer('layer_back_decor2', world_width, world_height, world_tile_width, world_tile_height, 2, 0x888888);
		
		// layer_back_decor1 = create_tile_layer('layer_back_decor1', world_width, world_height, world_tile_width, world_tile_height, 1.5, 0xaaaaaa);
		
		layer_floor = create_tile_layer('layer_floor', world_width, world_height, world_tile_width, world_tile_height, 0xffffff);
		
		layer_wall = create_tile_layer('layer_wall', world_width, world_height, world_tile_width, world_tile_height, 0x3388ff);
		
		randomize_tile_layer(layer_floor);
		randomize_tile_layer(layer_wall);
		
		player = Player(game);
		player.x = game.world.centerX;
		player.y = game.world.centerY;
		
		camera_follow(player, true);
		
	}
	
	function camera_follow(target, teleport) {
		if (teleport) {
			game.camera.focusOn(target);
		}
		game.camera.follow(target);
		game.camera.lerp.setTo(camera_lerp, camera_lerp);
	}
	
	function player_move() {
		if (cursors.left.isDown)
		{
			player.body.position.x -= 4;
		}
		else if (cursors.right.isDown)
		{
			player.body.position.x += 4;
		}

		if (cursors.up.isDown)
		{
			player.body.position.y -= 4;
		}
		else if (cursors.down.isDown)
		{
			player.body.position.y += 4;
		}
	}
	
	function update() {
		
		input_manager.update();
		
		player_move();
	}
	
}
