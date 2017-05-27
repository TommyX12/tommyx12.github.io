function start_game() {
	
	var game = new Phaser.Game(960, 720, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
	
	var cursors;
	
	var input_manager;

	var ui_group;
	
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
		
		game_start();
	}
	
	function game_start() {
		
	}
	
	function ui_update() {
		
	}
	
	function update() {
		input_manager.update();
		ui_update();
	}
	
}
