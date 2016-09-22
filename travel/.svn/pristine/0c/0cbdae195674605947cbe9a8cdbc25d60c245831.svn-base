$(function(){
	var $bannerBox = $('#banner .banner-box'),
        $bannerUl = $("#banner .banner-image ul"),
		$bannerList = $("#banner .banner-image li"),
		bannerDot = '<ul>';
	$bannerList.each(function(){
		bannerDot += '<li></li>'; 
	});
	bannerDot += '</ul>';
	$bannerBox.find(".menu_thumb").html(bannerDot += '</ul>');
    $bannerBox.slide({
		titCell:".menu_thumb ul li", 
        mainCell:".banner-image ul",
        effect:"fold", 
        pnLoop : true,
        prevCell:".banner-prev",
        nextCell:".banner-next",
        vis:"auto",
        scroll:1,
        autoPlay:true,
        interTime : 4000,
        delayTime:1500, 
        triggerTime:50,
        endFun:function(i){
        	var $t = $bannerList.eq(i);
            if ( $t.data("bgcolor") ){
                $t.css("background-color",$t.data("bgcolor"));
            }
        }
    });
    var $window = $(window),
        before = 0;
    $window.on("resize",function(){
        var now = + new Date;
        if ( now - before < 100 ){
            return false;
        }
        before = now;
        var w = $window.width();
        $bannerUl.width(w);
        $bannerList.width(w);
    });

})