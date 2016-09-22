$.fn.extend({
	mousewheel:function(cb) {
		if (navigator.userAgent.indexOf("Firefox")>-1) {
			$(this).get(0).addEventListener("DOMMouseScroll",fn);
		}else{			
			$(this).get(0).onmousewheel = fn;
		}
		function fn(e) {
			var e = e || window.event;
			var down = true;
			if (e.detail) {				
				down=e.detail>0;
			}else {
				down=e.wheelDelta<0;
			}		
			cb.apply($(this).get(0),[e,down])
			if (e.preventDefault) {
				e.preventDefault();
			}
			return false;
		}
	}
})