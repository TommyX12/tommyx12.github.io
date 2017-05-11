var $div_main;
var $div_main_content;

function random_range(min, max) {
	return min + Math.random() * (max - min);
}

function start_game() {
	
	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
	
	var obstacle_group;
	var star_group;
	var ground;
	var player;
	var player_anim;
	var text;
	
	var player_air_acc = 12;
	var player_ground_acc = 35;
	var player_air_friction = 0.99;
	var player_ground_friction = 0.9;
	var player_gravity = 2400;
	var player_jump_acc = 800;
	var player_anim_rate_base = 10;
	var player_anim_rate_change = 5;
	var scroll_speed = 350;
	var obstacle_spawn_delay_min = 0.5; // in second
	var obstacle_spawn_delay_max = 2;
	var obstacle_spawn_delay = 0;
	var obstacle_spawn_delay_timer = 0;
	var star_spawn_delay_min = 1.5; // in second
	var star_spawn_delay_max = 5;
	var star_spawn_delay = 0;
	var star_spawn_delay_timer = 0;
	
	var game_over;
	var score = 0;
	var high_score = 0;
	
	var keyboard;
	
	function preload() {
		game.load.image('logo', 'images/logo.png');
		game.load.image('sky', 'images/sky.png');
		game.load.image('ground', 'images/platform.png');
		game.load.image('star', 'images/star.png');
		game.load.spritesheet('dude', 'images/dude.png', 32, 48);
	}

	function create() {
		keyboard = game.input.keyboard;
		
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
		
		var sky = game.add.sprite(0, 0, 'sky');
		
		obstacle_group = game.add.group();
		obstacle_group.enableBody = true;
		
		ground = game.add.sprite(0, game.world.height - 128, 'ground');
		ground.scale.setTo(2, 4);
		ground.tint = 0x999999;
		game.physics.arcade.enable(ground);
		ground.body.immovable = true;
		
		/* var ledge1 = obstacle_group.create(400, 400, 'ground');
		ledge1.body.immovable = true;
		ledge1.body.checkCollision.down = false;
		var ledge2 = obstacle_group.create(-150, 250, 'ground');
		ledge2.body.immovable = true;
		ledge2.body.checkCollision.down = false; */
		
		player = game.add.sprite(32, game.world.height - 200, 'dude');
		player.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(player);
		
		player.body.bounce.x = 0.2;
		player.body.bounce.y = 0.2;
		player.body.gravity.y = player_gravity;
		player.body.collideWorldBounds = true;
		
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player_anim = player.animations.add('right', [5, 6, 7, 8], 10, true);
		
		star_group = game.add.group();
		star_group.enableBody = true;
		/* for (var i = 0; i < 12; ++i) {
			var star = star_group.create(i * 70, 0, 'star');
			
			star.body.gravity.y = 15;
			star.body.bounce.y = 0.7 + Math.random() * 0.3;
		} */
		
		var text_style = { font: 'bold 24px Arial', fill: '#ffffff', align: 'center', boundsAlignH: 'center', boundsAlignV: 'middle',};
		text = game.add.text(0, 0, '', text_style);
		text.setTextBounds(0, 0, 800, 100);
		
		restart();
	}
	
	function player_control() {
		var hit_ground = game.physics.arcade.collide(player, ground);
		
		var on_ground = player.body.touching.down && hit_ground;
			
		if (keyboard.isDown(Phaser.KeyCode.UP)) {
			if (on_ground) {
				player.body.velocity.y = -player_jump_acc;
			}
		}
		if (keyboard.isDown(Phaser.KeyCode.DOWN)) {
			
		}
		
		if (keyboard.isDown(Phaser.KeyCode.LEFT)) {
			if (on_ground) {
				player.body.velocity.x -= player_ground_acc;
			}
			else {
				player.body.velocity.x -= player_air_acc;
			}
			player_anim.speed = player_anim_rate_base - player_anim_rate_change;
		}
		else if (keyboard.isDown(Phaser.KeyCode.RIGHT)) {
			if (on_ground) {
				player.body.velocity.x += player_ground_acc;
			}
			else {
				player.body.velocity.x += player_air_acc;
			}
			player_anim.speed = player_anim_rate_base + player_anim_rate_change;
		}
		else {
			player_anim.speed = player_anim_rate_base;
		}
			
		if (on_ground) {
			player.body.velocity.x *= player_ground_friction;
			player.animations.play('right');
		}
		else {
			player.body.velocity.x *= player_air_friction;
			player.animations.stop();
		}
	}
	
	function player_check() {
		function on_obstacle_collision(player, obstacle) {
			player.kill();
			game_over = true;
		}
		
		function on_star_collision(player, star) {
			score++;
			high_score = Math.max(high_score, score);
			star.destroy();
		}
		
		game.physics.arcade.overlap(player, obstacle_group, on_obstacle_collision);
		game.physics.arcade.overlap(player, star_group, on_star_collision);
		
	}
	
	function restart() {
		game_over = false;
		score = 0;
		player.reset(32, game.world.height - 200);
		star_group.removeAll(true);
		obstacle_group.removeAll(true);
		console.log('game restarted.');
	}
	
	function spawn_obstacle() {
		var obstacle = obstacle_group.create(800, game.world.height - 200, 'ground');
		obstacle.tint = 0x222222;
		obstacle.scale.setTo(0.1, 3);
		obstacle.body.velocity.x = -scroll_speed;
		obstacle.update = function () {
			if (obstacle.body.position.x < -obstacle.width) {
				obstacle.destroy();
			}
		}
	}
	
	function spawn_star() {
		var star = star_group.create(800, game.world.height - random_range(150, 400), 'star');
		star.body.velocity.x = -scroll_speed;
		star.update = function () {
			if (star.body.position.x < -star.width) {
				star.destroy();
			}
		}
	}
	
	function spawn_check() {
		if (obstacle_spawn_delay_timer >= obstacle_spawn_delay) {
			spawn_obstacle();
			obstacle_spawn_delay_timer -= obstacle_spawn_delay;
			obstacle_spawn_delay = random_range(obstacle_spawn_delay_min, obstacle_spawn_delay_max);
		}
			
		obstacle_spawn_delay_timer += game.time.physicsElapsed;
		
		if (star_spawn_delay_timer >= star_spawn_delay) {
			spawn_star();
			star_spawn_delay_timer -= star_spawn_delay;
			star_spawn_delay = random_range(star_spawn_delay_min, star_spawn_delay_max);
		}
			
		star_spawn_delay_timer += game.time.physicsElapsed;
	}
	
	function update_text() {
		text.text = 'Score: ' + score + ' | High Score: ' + high_score;
		if (game_over) {
			text.text += '\nGame Over : Press SPACE to Restart';
		}
	}
	
	function game_state_check() {
		if (game_over) {
			if (keyboard.isDown(Phaser.KeyCode.SPACEBAR)) {
				restart();
			}
		}
	}
	
	function update() {
		player_control();
		player_check();
		spawn_check();
		update_text();
		game_state_check();
		// game.physics.arcade.collide(star_group, obstacle_group);
	}
	
}

function main(){
	$div_main = $('.main');
	$div_main_content = $('.main-content');
	
	/* $div_main.hide();
	$div_main_content.hide();
	
	$div_main.fadeIn(500);
	$div_main_content.slideDown(500); */
	
	start_game();
}


$(document).ready(main);
