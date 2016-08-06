// 大图滚动
// 获取所需元素
var con_1 = document.querySelector('.con_1');
// alert(con_1)
var inner = con_1.querySelector('.inner');
var l = document.querySelector('.left');
var r = document.querySelector('.right');
var img = inner.querySelectorAll('img');
var scril = document.querySelector('.scril');
var dd = scril.querySelectorAll('div');
// alert(dd.length)
// 记录第几张图片
var index = 0;
// 记录是否在运动
var move_bol = false;
setInterval(function () {
	r.click();
},2000)
r.onclick = function () {
	index++;
	if (index>3) {
		index=1;
		inner.style.left = 0+'px';
	}
	
	changedd()
}
// 改变小点点样式函数
function changedd() {
	for (var i = 0; i < dd.length; i++) {
		dd[i].className = '';
	}
	if (index ==3) {
		var j = 0;
	}else {
		var j = index;
	}
	dd[j].className= 'op';
	moveFn()
}
// 点击小圆点显示对应的图片
for (var i = 0; i < dd.length; i++) {
	dd[i].index = i;
	dd[i].onclick = function () {
		index= this.index;
		changedd();
		moveFn();
	}
}
// 运动函数
function moveFn() {
	move_bol= true;
	var start = parseInt(inner.style.left) || 0;
	// alert(start)
	var end = -index*375;
	var change = end - start;
	var endT = 30;
	var t = 0;
	var timer=setInterval(function () {
		t++;
		if (t>=endT) {
			clearInterval(timer);
			move_bol = false;
		}
		var l = Tween.Quad.easeInOut(t,start,change,endT);
		inner.style.left = l +'px';
	},30)
}






















