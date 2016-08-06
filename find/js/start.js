var pull = star2.find('p');
var start = $('.start');
var time = $('.time');
var s = 45,ti = 99,y = 0,a = 1,g = 0;
var kuang = $('.kuang');
var content = $('.content');
var state = $('.state');
var txt = $('.txt');
var time_bol = true;
var fail = $('.fail');
var again = fail.find('.again');
var shuoming = fail.find('.shuoming');
var end = $('.end');
var he = end.find('.he');
var success = end.find('.success');
var shuoming = $('.shuoming');
var explain1 = $('.explain');
var guan = explain1.find('.guan');
pull.on("touchstart",function(e) {
	var ey = e.touches[0].clientY;
	$(window).on('touchmove',function(e) {
		y = e.touches[0].clientY - ey;
		pull.css({bottom:y/521+'%'});
	})
	return false
})
$(window).on('touchend',function() {
	if (y<-60) {
		start.css({display:'block'});
		create();
		star2.css({display:'none'});
		audio.get(0).pause();
		time_bol = false;
		y = -60;
	}
	$(window).off('touchmove');
})
var s1 = 0;
var ti1 = 0;
var timer = null;
timers();
again.on('click',function() {
	s = 45;ti = 99;y = 0;a = 1;g = 0;
	timers();
	create();
	fail.css({display:'none'});
});
shuoming.on('click',function() {
	explain1.css({display:'block'});
});
guan.on('click',function() {
	explain1.css({display:'none'});
})
function timers() {
	timer = setInterval(function() {
		if (time_bol) {return}
		ti--;
		if (ti<0) {
			s--;
			ti = 99;
		}
		audio.get(1).play();
		if (s==0) {
			clearInterval(timer);
			audio.get(2).play();
			audio.get(1).pause();
			fail.css({display:'block'});
			ti = 0;
		}
		s1 = s;
		ti1 =ti;
		if (ti<10) {
			ti1 = '0'+ti;
		}
		if (s<10) {
			s1 = '0'+s;
		}
		time.html(s1+':'+ti1);
	},10);
}
function ran(a) {
	return Math.floor(Math.random()*a*a);
}
function create() {
	g++;
	a++;
	if (g==5) {a=5}else if (g==7) {a=6};
	content.find('img').remove();
	for (var i = 0; i < a*a; i++) {
		var img = $('<img src="img/start/bao.png" alt="">');
		img.css({width:90/a+'%'}).attr({src:'img/start/bao.png'})
		content.append(img);
	}
	var img = content.find('img');
	img.eq(ran(a)).attr({src:'img/start/xu.png'});
	img.on('click',function() {
		if ($(this).attr('src')=='img/start/xu.png') {
			if (g==8) {
				audio.get(4).play();
				audio.get(1).pause();
				end.css({display:'block'});
				he.css({display:'block'});
				start.css({display:'none'});
				clearInterval(timer);
				setTimeout(function() {
					he.css({display:'none'});
					success.css({display:'block'});
				},2500);
			}else {
				time_bol = true;
				audio.get(1).pause();
				state.css({display:'block'});
				state.find('img').attr({src:'img/start/state'+g+'.png'});
				setTimeout(function() {
					state.css({display:'none'});
					kuang.css({display:'none'});
					setTimeout(function() {
						kuang.css({display:'block'});
						txt.attr({src:'img/start/txt'+g+'.png'});
						if (g>6) {
							txt.css({left:26.2+'%'});
						}
						setTimeout(function() {
							time_bol = false;
							audio.get(1).play();
						},1000);
					},50);
					create();
				},1000);
			}
		}else {
			audio.get(3).play();
		}
	})
}














