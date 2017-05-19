
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

function bezier_quadratic(t, p0, p1, p2, out) {
	if (out === undefined) out = {x:0, y:0};
	out.x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
	out.y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;
	return out;
}

function bezier_cubic(t, p0, p1, p2, p3, out) {
	if (out === undefined) out = {x:0, y:0};
	out.x = (1-t)*(1-t)*(1-t)*p0.x + 3*(1-t)*(1-t)*t*p1.x + 3*(1-t)*t*t*p2.x + t*t*t*p3.x;
	out.y = (1-t)*(1-t)*(1-t)*p0.y + 3*(1-t)*(1-t)*t*p1.y + 3*(1-t)*t*t*p2.y + t*t*t*p3.y;
	return out;
}

function xy_to_angle(x, y) {
	return Math.atan2(y, x);
}

function angle_delta(start, end, use_radians) {
	if (use_radians === undefined) use_radians = true;
	
	var cap = use_radians ? Math.PI * 2 : 360;
	var dif = (end - start) % cap;
	if (dif != dif % (cap / 2)) {
		dif = (dif < 0) ? dif + cap : dif - cap;
	}
	return dif;
}

function angular_lerp(a, b, x, use_radians) {
	return a + angle_delta(a, b, use_radians) * x;
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
	if (array.length === 0) return null;
	
	return array[random_int(array.length)];
}

