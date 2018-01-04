window.onload = function(){
	var lis=document.getElementsByTagName('li');
	for (var i=0; i<lis.length; ++i) 
	{						
		lis[i].onmouseover = function() {					 
				this.className = "sfhover";
			}
		lis[i].onmouseout = function() {					 
				this.className = "";
			}
	} 
	var speed = 1200; 
	picScroll = document.getElementById("picScroll");//获取最外面的容器
	picScroll1 = document.getElementById("picScroll1");//获取存放内容的容器
	picscroll2 = document.getElementById("picScroll2");//获取临时存放内容的容器

	picscroll2.innerHTML = picScroll1.innerHTML;//将容器的内容填到容器2

	var ID=setInterval(changeToLeft,speed);//每speed毫秒，向左挪动一下

	//2、鼠标经过时暂停图片滚动
	picScroll.onmouseover=function() {
		clearInterval(ID);
	}
	//3、鼠标离开后图片继续滚动
	picScroll.onmouseout=function() {
		ID=setInterval(changeToLeft,speed);
	}

    //鼠标点击
    var pic=document.getElementById("pi1");
		var divTip1=document.getElementById("divTip1");
		pic.onmousemove=function(e){
			divTip1.style.display="block";
			divTip1.style.left=e.clientX+38+"px";
			divTip1.style.top=e.clientY+480+"px";
		}
		pic.onmouseout=function(){
			divTip1.style.display="none";
		}
	var pic=document.getElementById("pi2");
		var divTip2=document.getElementById("divTip2");
		pic.onmousemove=function(e){
			divTip2.style.display="block";
			divTip2.style.left=e.clientX+68+"px";
			divTip2.style.top=e.clientY+480+"px";
		}
		pic.onmouseout=function(){
			divTip2.style.display="none";
		}
	var pic=document.getElementById("pi3");
		var divTip3=document.getElementById("divTip3");
		pic.onmousemove=function(e){
			divTip3.style.display="block";
			divTip3.style.left=e.clientX+68+"px";
			divTip3.style.top=e.clientY+480+"px";
		}
		pic.onmouseout=function(){
			divTip3.style.display="none";
		}
	var pic=document.getElementById("pi4");
		var divTip4=document.getElementById("divTip4");
		pic.onmousemove=function(e){
			divTip4.style.display="block";
			divTip4.style.left=e.clientX+68+"px";
			divTip4.style.top=e.clientY+480+"px";
		}
		pic.onmouseout=function(){
			divTip4.style.display="none";
		}
		//换色
		var foot=document.getElementById("foot");
	   	var setBgColor=document.getElementById("setBgColor");
	   	setBgColor.onclick=function(){
	   		foot.style.backgroundColor="#3366FF";
	   	}



};
//1、图片向左滚动函数实现
function changeToLeft(){
	
	if(picScroll.scrollLeft >= (picScroll1.offsetWidth)){
		picScroll.scrollLeft = 0;
	}
	else{
		picScroll.scrollLeft += 1285;
	}
}