
function render_canvas(){
	var c = $('#main-canvas')[0];
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();
}

function main(){
	var div_main = $('.main');
	var div_main_content = $('.main-content');
	div_main.hide();
	div_main_content.hide();
	// div_main.fadeIn(500);
	div_main.fadeIn(500);
	div_main_content.slideDown(500);

	render_canvas();
}


$(document).ready(main);
