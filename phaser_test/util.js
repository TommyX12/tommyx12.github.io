
function random_range(min, max) {
	return min + Math.random() * (max - min);
}

function random_int(max) {
	return Math.floor(Math.random() * max);
}

function random_chance(chance) {
	return Math.random() < chance;
}

function dist_sq(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return dx * dx + dy * dy;
}

function dist(x1, y1, x2, y2) {
	return Math.sqrt(dist_sq(x1, y1, x2, y2));
}

function angle_to_point(point, angle, magnitude) {
	point.x = Math.cos(angle) * magnitude;
	point.y = Math.sin(angle) * magnitude;
}

function xy_to_angle(x, y) {
	return Math.atan2(y, x);
}

function deg(rad) {
	return rad / Math.PI * 180;
}

function rad(deg) {
	return deg / 180 * Math.PI;
}

function lerp(a, b, x) {
	return a + (b - a) * x;
}

function clamp(x, min, max) {
	if (x < min) return min;
	if (x > max) return max;
	return x;
}

function create_2d_array(size1, size2, initial_value) {
	var array = []
	for (var i = 0; i < size1; ++i) {
		var row = []
		for (var j = 0; j < size2; ++j) {
			row.push(initial_value);
		}
		array.push(row);
	}
	
	return array;
}

function random_select_array(array) {
	return array[random_int(array.length)];
}

