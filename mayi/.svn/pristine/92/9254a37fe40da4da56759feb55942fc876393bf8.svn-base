$(document).ready(function(){
	setTimeout(function(){$(".page-course-yuan").css("display","block")},1000);
	setTimeout(function(){$(".p1_9").css("display","block")},2300);
	$(".page").on("swipeup",function(){
		$(this).addClass("hide");
	    $(this).next(".page").removeClass("hide");
	    if($(this).prop("id")=="page1"){
	     /*new Hongru.shutter.init('shutterH',{id:'shutter'});*/	
	    }else if($(this).prop("id")=="page4"){
	    	/*var href = window.location.href;
    		window.location.href = href;*/
    		$(".page:first").removeClass("hide");
	    }
	});
	
	$(".page").on("swipedown",function(){
		if($(this).prop("id")=="page1"){
			$(this).addClass("hide");
			$(".page:last").removeClass("hide");
		}else{
			$(this).addClass("hide");
		    $(this).prev(".page").removeClass("hide"); 
		    $(this).addClass("hide");
		}
	});
	/**page5**/
	$(".js_kz").each(function(index){
	    $(this).click("tap",function(){
	   		$(this).find("span").show();
	   		$(this).find("em").hide();
	   		$(this).animate({left:"-30px"});
	   		$(this).siblings(".js_kz").find("span").hide();
	   		$(this).siblings(".js_kz").find("em").show();
	   		$(this).siblings(".js_kz").animate({left:"-170px"});
	   		$(".js_kz_nr:eq(" + index + ")").show().siblings(".js_kz_nr").hide();
	   		$(".p5_1").css("background","url(../images/p"+ index +".jpg)no-repeat");
	    });
	});
	
	/**page6**/
	
	$(".js_kz1").each(function(index){
	    $(this).click("tap",function(){
	   		$(this).find("span").show();
	   		$(this).find("em").hide();
	   		$(this).animate({left:"-30px"});
	   		$(this).siblings(".js_kz1").find("span").hide();
	   		$(this).siblings(".js_kz1").find("em").show();
	   		$(this).siblings(".js_kz1").animate({left:"-170px"});
	   		$(".js_kz_nr1:eq(" + index + ")").show().siblings(".js_kz_nr1").hide();
	   		$(".p6_1").css("background","url(../images/p6"+ index +".jpg)no-repeat");
	    });
	});
	$(".page5 .p5_3").click("tap",function(){
		$(this).parents(".page5").addClass("hide");
		$("#page2").removeClass("hide");
	});
	$(".page6 .p5_3").click("tap",function(){
		$(this).parents(".page6").addClass("hide");
		$("#page3").removeClass("hide");
	});
	$("#ymdx").click("tap",function(){
		$(this).parents(".page").addClass("hide");
		$("#page5").removeClass("hide");
	});
	$("#mydwj").click("tap",function(){
		$(this).parents(".page").addClass("hide");
		$("#page5").removeClass("hide");
		$(".js_kz:eq(1)").click();
	});
	$("#hlw").click("tap",function(){
		$(this).parents(".page").addClass("hide");
		$("#page5").removeClass("hide");
		$(".js_kz:eq(2)").click();
	});
	$(".page3 .mune li:eq(0)").click("tap",function(){
		$(this).parents(".page").addClass("hide");
		$("#page6").removeClass("hide");
		$(".page6 .js_kz1:eq(0)").click();
	});
	$(".page3 .mune li:eq(1)").click("tap",function(){
		$(this).parents(".page").addClass("hide");
		$("#page6").removeClass("hide");
		$(".page6 .js_kz1:eq(1)").click();
	});
	$(".page3 .mune li:eq(2)").click("tap",function(){
		$(this).parents(".page").addClass("hide");
		$("#page6").removeClass("hide");
		$(".page6 .js_kz1:eq(2)").click();
	});
	$(".page3 .mune li:eq(3)").click("tap",function(){
		$(this).parents(".page").addClass("hide");
		$("#page6").removeClass("hide");
		$(".page6 .js_kz1:eq(3)").click();
	});
})