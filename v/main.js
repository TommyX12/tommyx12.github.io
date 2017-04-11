var $div_main;
var $div_main_content;
var $text_box;

function main(){
	$div_main = $('.main');
	$div_main_content = $('.main-content');
	$text_box = $('#text-box');
	
	$div_main.hide();
	
	$div_main.fadeIn(500);
	
	$text_box[0].innerHTML = data.start.text[0];
}


$(document).ready(main);
