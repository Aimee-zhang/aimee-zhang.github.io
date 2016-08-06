

$clock = $('.clock');
$wrap2 = $('.wrap2');
$xx = $('.xx');
$clock.click(function() {
	$wrap2.fadeIn();
})
$xx.click(function() {
	$wrap2.fadeOut();
})


//wrap2高度
$wrap = $('.wrap');
$wrap2 = $('.wrap2');
var $h = $wrap.height();
$wrap2.css('height',$h);
$(window).resize(function () {
	var $h = $wrap.height();
	$wrap2.css('height',$h);
})


//.wrap2 .w1 .input1 获得焦点

$input = $('.wrap2 .w1 .input1');
$input.focus(function () {
	$input.val('');
});
$input.blur(function () {
	$input.val('金额（元）可输入1-200')
})


//匿名赞赏
$img = $('.footer img');
$strong = $('.footer strong');
$img_bol = false;

$strong.click(function () {
	if ($img_bol) {
		$img.attr("src","img2/dui.png");
		$img_bol = false;
	}else {
		$img.attr("src","img2/dui2.png");
		$img_bol = true;
	}	
})












