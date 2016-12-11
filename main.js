var images = {
	phone: {src: 'img/phone.png'},
	icon_grid_1: {src: 'img/icon_grid/icon_grid_1.png'},
	bottom_bar_1: {src: 'img/bottom_bar/bottom_bar_1.png'},
	background_1: {src: 'img/background/background_1.jpg'},
};

var icon_grid_sel = images.icon_grid_1;
var bottom_bar_sel = images.bottom_bar_1;
var background_sel = images.background_1;
var icon_grid_alpha_fade = 0.15;


var icon_grid_pos = [];
for (var i = 0; i < 6; i++){
	var row = [];
	for (var j = 0; j < 4; j++){
		row.push({x: 116 + j*(520/3), y: 106 + i*(883/5)});
	}
	icon_grid_pos.push(row);
}

var bottom_bar_pos = {x: 375, y:1143};


/*
 * 116, 124
 * 636, 1007
 * 114
 * 66
 * 
 * x 116
 * y 106
 * width 520 / 3
 * height 883 / 5
 * 
 * 1038
 * 847
 * 
 * x 0
 * y 1143
 * width 750
 * height 191
*/

function load_assets(){
	var num_loaded = 0;
	var total_images = 0;
	for (var key in images) {
		if (images.hasOwnProperty(key)) {
			total_images++;
		}
	}
	for (var key in images) {
		if (images.hasOwnProperty(key)) {
			images[key].loaded = false;
			images[key].obj = new Image();
			images[key].obj.src = images[key].src;
			images[key].obj.onload = function(){
				images[key].loaded = true;
				num_loaded++;
				if (num_loaded == total_images){
					assets_loaded();
				}
			}
		}
	}
}

function canvas_draw_image(c, ctx, img, x, y, alpha=1.0){
	ctx.globalAlpha = alpha;
	ctx.drawImage(img, x, y);
	ctx.globalAlpha = 1.0;
}

function canvas_draw_image_centered(c, ctx, img, x, y, alpha=1.0){
	alpha = Math.max(0.0, alpha);
	ctx.globalAlpha = alpha;
	ctx.drawImage(img, x-img.width/2, y-img.height/2);
	ctx.globalAlpha = 1.0;
}

function canvas_clear(c, ctx){
	ctx.clearRect(0, 0, c.width, c.height);
}

function render_canvas(){
	var c = $('#main-canvas')[0];
	var ctx = c.getContext("2d");
	canvas_clear(c, ctx);

	// background
	canvas_draw_image(c, ctx, background_sel.obj, 0, 0);

	// bottom_bar
	canvas_draw_image_centered(c, ctx, bottom_bar_sel.obj, bottom_bar_pos.x, bottom_bar_pos.y);

	// icon_grid
	var icon_grid_alpha = 1.0;
	for (var i = 0; i < icon_grid_pos.length; ++i){
		for (var j = 0; j < icon_grid_pos[i].length; ++j){
			canvas_draw_image_centered(c, ctx, icon_grid_sel.obj, icon_grid_pos[i][j].x, icon_grid_pos[i][j].y, icon_grid_alpha);
		}
		icon_grid_alpha -= icon_grid_alpha_fade;
	}

	/*ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();*/
}

function assets_loaded(){
	render_canvas();
}

function main(){
	var div_main = $('.main');
	var div_main_content = $('.main-content');
	div_main.hide();
	div_main_content.hide();
	// div_main.fadeIn(500);
	div_main.fadeIn(500);
	div_main_content.slideDown(500);

	load_assets();
}


$(document).ready(main);
