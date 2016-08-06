var load = $('.loading');
var animate_txt = $('.animate_txt');
var animate_dong = $('.animate_dong');
var fly = animate_dong.find('.fly');
var phone = animate_dong.find('.phone');
var explain = animate_txt.find('div');
var audio = $('audio');
var star = $('.star');
var star2 = $('.star2');
var str = '公元9025年r外星人为了争夺r封印在vivo手机中的神秘能量r发起宇宙战乱r超人徐峥为了保卫神秘能量r带着手机来到浩瀚宇宙中r分身成为8个自己r分别保卫8块手机碎片r消失在太阳系的八大行星中r据说找齐徐峥的8个分身r就能启动神秘能量保护地球r...';
var n = 0;
var del = 0;
var bol = true;
var degree = 0;
var t = 0;
var l = 0;
var to = 0;
step();
//游戏事件描述
function step() {
	t++;
	var id = requestAnimationFrame(step);
	if (t>240) {
		del++;
		load.eq(0).css({display:'none'});
		animate_txt.eq(0).css({display:'block'});
		if (del>6) {
			audio.get(5).play();
			explain.html(str.substring(0,++n).replace(/r/g,"<br>"));
			del = 0;
		}
		if (t>6*str.length+360) {
			animate_txt.eq(0).css({display:'none'});
			animate_dong.eq(0).css({display:'block'});
			step2();
			audio.get(5).pause();
			cancelAnimationFrame(id);
		}
	}
}
//人物出场动画
// step2();
function step2() {
	l++;
	to += 0.62;
	var id2 = requestAnimationFrame(step2);
	if (l>85&& bol) {
		del++;
		l = 86;
		to = 53.32;
		if (del>12) {
			if (fly.attr('src')=='img/animate/fly1.png' ) {
				fly.attr({src:'img/animate/fly2.png'});
				degree++;
			}else {
				fly.attr({src:'img/animate/fly1.png'});
			}
			del = 0;	
		}
		if (degree>5) {
			bol = false;
		}
	}
	fly.eq(0).css({left:(100-l)+'%',top:(78.7-to)+'%'});
	if (l>180) {
		phone.fadeIn();
		if (l>450) {
			phone.attr({src:'img/animate/phone2.png'});
		}
		if (l>510) {
			animate_dong.fadeOut(100,function() {
				star.fadeIn(100,function() {
					setTimeout(function() {
						star.css({display:'none'});
						star2.css({display:'block'});
					},4495);
				});
			});
			cancelAnimationFrame(id2);
		}	
	}
}		










