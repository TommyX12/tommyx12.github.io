var $div_main;
var $div_main_content;

function main(){
	$div_main = $('.main');
	$div_main_content = $('.main-content');
	
	/* $div_main.hide();
	$div_main_content.hide();
	
	$div_main.fadeIn(500);
	$div_main_content.slideDown(500); */
	
	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create });

	function preload () {
		game.load.image('logo', 'images/phaser.png');
	}

	function create () {
		var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
		logo.anchor.setTo(0.5, 0.5);
	}
}


$(document).ready(main);
