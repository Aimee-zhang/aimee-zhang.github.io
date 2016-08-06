//input 获得焦点时

$input = $('.header input');

$input.focus(function(){
  $input.val('');
});
$input.blur(function(){
  $input.val('搜索食材、菜品');
});

//倒计时事件显示
$h = $('.h');
$m = $('.m');
$s = $('.s');


//倒计时事件显示2
$h2 = $('.h2');
$m2 = $('.m2');
$s2 = $('.s2');


var timer = setInterval(function () {
	var oDate = new Date()//当前时间
	var d = new Date("2016-7-28");
	var d2 = new Date("2016-7-27");
	//计算当前时间到明天的时间戳 秒数
	var time = parseInt((d-oDate)/1000);
	var time2 = parseInt((d2-oDate)/1000);

	var day = parseInt(time/86400);
	var h = parseInt(time%86400/3600);
	var m = parseInt(time%3600/60);
	var s = parseInt(time%60);
	var day2 = parseInt(time2/86400);
	var h2 = parseInt(time2%86400/3600);
	
	var m2 = parseInt(time2%3600/60);
	var s2 = parseInt(time2%60);

	if (h<10&&day<=0) {
		$h.text('0'+h);
	}else {
		$h.text(h+day*24);
	}
	if (m<10) {
		$m.text('0'+m);
	}else {
		$m.text(m);
	}
	if (s<10) {
		$s.text('0'+s);
	}else {
		$s.text(s);
	}

	if (h2<10&&day2<=0) {
		$h2.text('0'+h2);
	}else {
		$h2.text(h2+day2*24);
	}
	if (m2<10) {
		$m2.text('0'+m2);
	}else {
		$m2.text(m2);
	}
	if (s2<10) {
		$s2.text('0'+s2);
	}else {
		$s2.text(s2);
	}
	
},1000)


//footer 




