var image_path = 'images/';

var images = {
	phone: {src: 'phone.png'},
	empty: {src: 'empty.png'},

	icon_grid_slot: {src: 'icon_grid/icon_grid_slot.png'},
	icon_grid_shadow: {src: 'icon_grid/icon_grid_shadow.png'},
	icon_grid_light: {src: 'icon_grid/icon_grid_light.png'},
	icon_grid_lines: {src: 'icon_grid/icon_grid_lines.png'},

	bottom_bar_circles: {src: 'bottom_bar/bottom_bar_circles.png'},
	bottom_bar_gradient: {src: 'bottom_bar/bottom_bar_gradient.png'},
	bottom_bar_grass: {src: 'bottom_bar/bottom_bar_grass.png'},
	bottom_bar_light: {src: 'bottom_bar/bottom_bar_light.png'},
	bottom_bar_shadow: {src: 'bottom_bar/bottom_bar_shadow.png'},

	background_blurry: {src: 'background/background_blurry.png'},
	background_blurry2: {src: 'background/background_blurry2.png'},
	background_nightsky: {src: 'background/background_nightsky.png'},
	background_purplesky: {src: 'background/background_purplesky.png'},
	background_sky: {src: 'background/background_sky.png'},
	background_sky2: {src: 'background/background_sky2.png'},
};

var options_icon_grid = [
	{img_name: 'icon_grid_light', text: 'Light'},
	{img_name: 'icon_grid_shadow', text: 'Shadow'},
	{img_name: 'icon_grid_slot', text: 'Slot'},
	{img_name: 'icon_grid_lines', text: 'Lines'},
	{img_name: 'empty', text: 'None'},
];
var options_bottom_bar = [
	{img_name: 'bottom_bar_shadow', text: 'Shadow'},
	{img_name: 'bottom_bar_light', text: 'Light'},
	{img_name: 'bottom_bar_circles', text: 'Circles'},
	{img_name: 'bottom_bar_gradient', text: 'Gradient'},
	{img_name: 'bottom_bar_grass', text: 'Grass'},
	{img_name: 'empty', text: 'None'},
];
var options_background = [
	{img_name: 'background_sky', text: 'Sky'},
	{img_name: 'background_sky2', text: 'Sky 2'},
	{img_name: 'background_nightsky', text: 'Night Sky'},
	{img_name: 'background_purplesky', text: 'Purple Sky'},
	{img_name: 'background_blurry', text: 'Blurry'},
	{img_name: 'background_blurry2', text: 'Blurry 2'},
];
var options_icon_grid_fade = {start: 0.15, stop: 0.5, steps: 7}

var icon_grid_sel = images[options_icon_grid[0].img_name];
var bottom_bar_sel = images[options_bottom_bar[0].img_name];
var background_sel = images[options_background[0].img_name];
var icon_grid_fade = options_icon_grid_fade.start;

var $div_main;
var $div_main_content;
var $main_canvas;
var $main_canvas_context;

var $icon_grid_sel;
var $bottom_bar_sel;
var $background_sel;
var $icon_grid_fade_sel;


var icon_grid_pos = [];
for (var i = 0; i < 6; i++){
	var row = [];
	for (var j = 0; j < 4; j++){
		row.push({x: 116 + j*(520/3), y: 106 + i*(883/5)});
	}
	icon_grid_pos.push(row);
}

var bottom_bar_pos = {x: 375, y:1143};


function setup_options(){
	for (var i = 0; i < options_icon_grid.length; ++i){
		var option_data = options_icon_grid[i];
		var option = new Option(option_data.text, option_data.img_name);
		$icon_grid_sel.add(option);
	}
	$icon_grid_sel.selectedIndex = 0;
	$icon_grid_sel.onchange = function(){
		icon_grid_sel = images[$icon_grid_sel.options[$icon_grid_sel.selectedIndex].value];
		render_canvas(true);
	}

	for (var i = 0; i < options_bottom_bar.length; ++i){
		var option_data = options_bottom_bar[i];
		var option = new Option(option_data.text, option_data.img_name);
		$bottom_bar_sel.add(option);
	}
	$bottom_bar_sel.selectedIndex = 0;
	$bottom_bar_sel.onchange = function(){
		bottom_bar_sel = images[$bottom_bar_sel.options[$bottom_bar_sel.selectedIndex].value];
		render_canvas(true);
	}

	for (var i = 0; i < options_background.length; ++i){
		var option_data = options_background[i];
		var option = new Option(option_data.text, option_data.img_name);
		$background_sel.add(option);
	}
	$background_sel.selectedIndex = 0;
	$background_sel.onchange = function(){
		background_sel = images[$background_sel.options[$background_sel.selectedIndex].value];
		console.log(typeof background_sel);
		render_canvas(true);
	}
	
	for (var i = 0; i <= options_icon_grid_fade.steps; ++i){
		var value = (options_icon_grid_fade.stop - options_icon_grid_fade.start) / options_icon_grid_fade.steps * i + options_icon_grid_fade.start;
		var option = new Option(value.toFixed(2), value);
		$icon_grid_fade_sel.add(option);
	}
	$icon_grid_fade_sel.selectedIndex = 0;
	$icon_grid_fade_sel.onchange = function(){
		icon_grid_fade = $icon_grid_fade_sel.options[$icon_grid_fade_sel.selectedIndex].value;
		render_canvas(true);
	}

}

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
			images[key].obj.src = image_path + images[key].src;
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

function render_canvas(draw_extra=true){
	var c = $main_canvas;
	var ctx = $main_canvas_context;
	canvas_clear(c, ctx);

	// background
	canvas_draw_image(c, ctx, background_sel.obj, 0, 0);

	if (draw_extra){
		// bottom_bar
		canvas_draw_image_centered(c, ctx, bottom_bar_sel.obj, bottom_bar_pos.x, bottom_bar_pos.y);

		// icon_grid
		var icon_grid_alpha = 1.0;
		for (var i = 0; i < icon_grid_pos.length; ++i){
			for (var j = 0; j < icon_grid_pos[i].length; ++j){
				canvas_draw_image_centered(c, ctx, icon_grid_sel.obj, icon_grid_pos[i][j].x, icon_grid_pos[i][j].y, icon_grid_alpha);
			}
			icon_grid_alpha -= icon_grid_fade;
		}
	}

	/*ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.stroke();*/
}

function assets_loaded(){
	// $div_main.fadeIn(500);
	
	setup_options();
	
	// $div_main.fadeIn(500);
	// $div_main_content.slideDown(500);
	$div_main.show();
	$div_main_content.show();

	$('#btn-save').on('click', function(){
		render_canvas(true);
		window.open($main_canvas.toDataURL());
	});

	$('#btn-save-lock').on('click', function(){
		render_canvas(false);
		window.open($main_canvas.toDataURL());
		render_canvas(true);
	});

	render_canvas(true);
}

function main(){
	$main_canvas = $('#main-canvas')[0];
	$main_canvas_context = $main_canvas.getContext("2d");
	$div_main = $('.main');
	$div_main_content = $('.main-content');
	$div_main.hide();
	$div_main_content.hide();

	$icon_grid_sel = $('#icon-grid-sel')[0];
	$bottom_bar_sel = $('#bottom-bar-sel')[0];
	$background_sel = $('#background-sel')[0];
	$icon_grid_fade_sel = $('#icon-grid-fade-sel')[0];

	load_assets();
}


$(document).ready(main);
