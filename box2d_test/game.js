function start_game() {
	
	Box2D().then(function (Box2D){
		var game = new Phaser.Game(960, 720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
		
		var cursors;
		
		var input_manager;

		var ui_group;
		
		var test_sprite;
		
		function preload() {
			game.load.image('block', 'images/block.png');
			game.load.image('circle', 'images/circle.png');
			
			game.load.bitmapFont('gem', 'fonts/gem.png', 'fonts/gem.xml');
		}
		
		function in_world_bounds(x, y) {
			return x >= 0 && x < game.world.width && y >= 0 && y < game.world.height;
		}
		
		function create() {
			input_manager = InputManager(game);

			game.stage.backgroundColor = '#222222';
			
			cursors = game.input.keyboard.createCursorKeys();

			ui_group = game.add.group();
			ui_group.fixedToCamera = true;
			
			create_box2d(Box2D, 0.0, to_pixel(9.81));
			
			var sprite = game.add.sprite(0, 0, 'block');
			enable_box2d(sprite, game.world.width / 2, game.world.height, game.world.width, 20, false);
			
			game_start();
		}
		
		function game_start() {
			
		}
		
		function ui_update() {
			
		}
		
		function update() {
			input_manager.update();
			ui_update();
			update_box2d();
			if (input_manager.is_mouse_pressed_once()) {
				var sprite = game.add.sprite(0, 0, 'block');
				enable_box2d(sprite, game.input.activePointer.x, game.input.activePointer.y, random_range(10, 60), random_range(10, 60), true);
				sprite.box2d_body.set_angle(random_range(0, 360));
				console.log(sprite.box2d_body.body);
				sprite.box2d_body.set_velocity_x(random_range(-500, 500));
				sprite.box2d_body.set_velocity_y(random_range(-500, 500));
				// sprite.box2d_body.set_collision(false);
			}
		}
	});
	
}
