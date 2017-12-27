var data = {
	start: {
		text: [
			`孩子对山谷喊了声“喂”，四面八方传来阵阵的“喂”。<br>
			孩子很惊讶：你是谁？<br>
			山谷：你是谁？<br>
			孩子：告诉我！<br>
			山谷：告诉我！<br>
			孩子：正宗好凉茶正宗好声音欢迎收看由凉茶领导品牌或者登陆官方数字音乐平台下载每期节目最精彩的歌曲彩铃<br>
			山谷：操`,
		],
		next: [
		],
	},
	
};

function verify_data() {
	for (var node_name in data) {
		next = data[node_name].next;
		for (var i = 0; i < next.length; ++i) {
			if (!(next[i] in data)) {
				console.log("Invalid node name: " + next[i]);
				return;
			}
		}
	}
}

verify_data();
