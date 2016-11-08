$(function(){
	$("#top").load("top1.html");
	var small=document.getElementById("small");
	var big= document.getElementById("big");
	var smallpic=document.getElementById("smallpic");
	var bigpic= document.getElementById("bigpic");
   	var mask= document.getElementById("mask");
	 
	var scale;
	small.onmouseover = function(){
		mask.style.display = "block";
		big.style.display = "block";
		scale = bigpic.offsetHeight/small.offsetHeight;
		mask.style.width = big.offsetWidth/scale + "px";
		mask.style.height = big.offsetHeight/scale + "px";
		mask.style.cursor = "pointer";
	}
	small.onmouseout = function(){
		mask.style.display = "none";
		big.style.display = "none";
	}
	small.onmousemove = function(evt){
		var e = evt ||window.event;
		var left = e.x - mask.offsetWidth/2-small.offsetLeft;
		var top = e.y - mask.offsetHeight/2-small.offsetTop+document.body.scrollTop;
		if(left<0){
			left=0;
		}
		if(left>small.offsetWidth-mask.offsetWidth){
			left=small.offsetWidth-mask.offsetWidth;
		}
		if(top<0){
			top=0;
		}
		if(top>small.offsetHeight-mask.offsetHeight){
			top=small.offsetHeight-mask.offsetHeight;
		}
		mask.style.left= left+"px";
		mask.style.top= top+"px";
		
		bigpic.style.left= -mask.offsetLeft* scale +"px";
		bigpic.style.top= -mask.offsetTop *scale +"px";
	}

})
