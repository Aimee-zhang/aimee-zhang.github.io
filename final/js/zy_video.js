	var back_btn= document.querySelector('.back');
	var start = document.querySelector('.start_play');
	var stop = document.querySelector('.stop_play');
	back_btn.onclick = function () {
		// alert('')返回视频页面
	}
	var bol = false;
	start.onclick = function () {
		if (!bol) {
			stop.style.display = 'block';
			bol = true;
		}else {
			stop.style.display = 'none';
			bol = false;
		}
		
	}
	// 暂停按钮
	stop.onclick = function () {
		stop.style.display='none';
		bol =false;
	}

	// 横竖屏
function hengshuping(){
  if(window.orientation==180||window.orientation==0){
        alert("竖屏状态！")       
   }
if(window.orientation==90||window.orientation==-90){
        alert("横屏状态！")        
    }
 }
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);











