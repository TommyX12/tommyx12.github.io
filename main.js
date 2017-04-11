var $div_main;
var $div_main_content;

function main(){
	$div_main = $('.main');
	$div_main_content = $('.main-content');
	$div_main.hide();
	$div_main_content.hide();
	
	$div_main.fadeIn(500);
	$div_main_content.slideDown(500);
}


$(document).ready(main);
