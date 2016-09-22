$(function(){
	var $backTop = $("#back-to-top");
	$backTop.hide();
		$(function () {
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
			$backTop.fadeIn(500);
			}else{
			$backTop.fadeOut(500);
			}
		});
		$backTop.click(function(){
			$('body,html').animate({scrollTop:0},100);
			return false;
		});
	});
})