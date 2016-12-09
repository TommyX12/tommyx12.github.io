

function main(){
	var div_main = $('.main');
	var div_main_content = $('.main-content');
	div_main.hide();
	div_main_content.hide();
	// div_main.fadeIn(500);
	div_main.fadeIn(500);
	div_main_content.slideDown(500);
}

$(document).ready(main);
