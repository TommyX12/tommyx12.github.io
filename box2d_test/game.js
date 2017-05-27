function start_game() {
	
	Box2D().then(function (Box2D){
		var game = new Phaser.Game(960, 720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
		
		var cursors;
		
		var input_manager;

		var ui_group;
		
		var box2d_world;
		var test_sprite;
		
		var box2d_time_step = 1.0 / 60.0;
		var box2d_vel_iterations = 8;
		var box2d_pos_iterations = 3;
		
		var box2d_pixels_per_meter = 960 / 10;
			
		function box2d_enable_physics(sprite, dynamic, x, y, width, height, rotation) {
			var box2d_body = {
				body: null,
				
				get_x: function () {
					return box2d_body.body.GetPosition().get_x() * box2d_pixels_per_meter;
				},
				
				get_y: function () {
					return box2d_body.body.GetPosition().get_y() * box2d_pixels_per_meter;
				},
				
				set_x: function (value) {
					var position = box2d_body.body.GetPosition();
					position.set_x(value / box2d_pixels_per_meter);
					box2d_body.body.SetTransform(position, box2d_body.body.GetAngle());
					return value;
				},
				
				set_y: function (value) {
					var position = box2d_body.body.GetPosition();
					position.set_y(value / box2d_pixels_per_meter);
					box2d_body.body.SetTransform(position, box2d_body.body.GetAngle());
					return value;
				},
				
				get_velocity_x: function () {
					return box2d_body.body.GetLinearVelocity().get_x() * box2d_pixels_per_meter;
				},
				
				get_velocity_y: function () {
					return box2d_body.body.GetLinearVelocity().get_y() * box2d_pixels_per_meter;
				},
				
				set_velocity_x: function (value) {
					var velocity = box2d_body.body.GetLinearVelocity();
					velocity.set_x(value / box2d_pixels_per_meter);
					box2d_body.body.SetLinearVelocity(velocity);
					return value;
				},
				
				set_velocity_y: function (value) {
					var velocity = box2d_body.body.GetLinearVelocity();
					velocity.set_y(value / box2d_pixels_per_meter);
					box2d_body.body.SetLinearVelocity(velocity);
					return value;
				},
				
				set_collision: function (value) {
					box2d_body.body.GetFixtureList().SetSensor(!value);
					return value;
				},
				
				update: function () {
					var position = box2d_body.body.GetPosition();
					var angle = box2d_body.body.GetAngle();
					sprite.x = position.get_x() * box2d_pixels_per_meter;
					sprite.y = position.get_y() * box2d_pixels_per_meter;
					sprite.angle = deg(angle);
				},
				
				destroy: function () {
					
				},
			};
			
			sprite.anchor.set(0.5);
			sprite.width = width;
			sprite.height = height;
			sprite.angle = rotation;
			
			var body_def = new Box2D.b2BodyDef();
			if (dynamic) body_def.set_type(Box2D.b2_dynamicBody);
			body_def.get_position().Set(x / box2d_pixels_per_meter, y / box2d_pixels_per_meter);
			body_def.set_angle(rad(rotation));
			box2d_body.body = box2d_world.CreateBody(body_def);
			
			var box = new Box2D.b2PolygonShape();
			box.SetAsBox(width / 2 / box2d_pixels_per_meter, height / 2 / box2d_pixels_per_meter);
			
			var fixture_def = new Box2D.b2FixtureDef();
			fixture_def.set_shape(box);
			fixture_def.set_density(1.0);
			fixture_def.set_friction(0.3);
			fixture_def.set_restitution(0.5);
			
			box2d_body.body.CreateFixture(fixture_def);
			
			sprite.box2d_body = box2d_body;
			sprite.box2d_body.update();
			
			sprite.update = function () {
				sprite.box2d_body.update();
			}
		}
			
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
			
			var gravity = new Box2D.b2Vec2(0.0, 9.8);
			box2d_world = new Box2D.b2World(gravity);
			// box2d_world.SetAllowSleeping(false);
			
			var sprite = game.add.sprite(0, 0, 'block');
			box2d_enable_physics(sprite, false, game.world.width / 2, game.world.height, game.world.width, 20, 0);
			
			var sprite = game.add.sprite(0, 0, 'block');
			box2d_enable_physics(sprite, true, 50, 50, 20, 20, 0);
			
			game_start();
		}
		
		function game_start() {
			
		}
		
		function ui_update() {
			
		}
		
		function box2d_update() {
			box2d_world.Step(box2d_time_step, box2d_vel_iterations, box2d_pos_iterations);
		}
		
		function update() {
			input_manager.update();
			ui_update();
			box2d_update();
			if (input_manager.is_mouse_pressed_once()) {
				var sprite = game.add.sprite(0, 0, 'block');
				box2d_enable_physics(sprite, true, game.input.activePointer.x, game.input.activePointer.y, random_range(10, 60), random_range(10, 60), random_range(0, 360));
				console.log(sprite.box2d_body.body);
				sprite.box2d_body.set_velocity_x(random_range(-500, 500));
				sprite.box2d_body.set_velocity_y(random_range(-500, 500));
				sprite.box2d_body.set_collision(false);
			}
		}
	});
	
}
