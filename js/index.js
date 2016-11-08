$(function(){
	//	轮播图
	$.ajax({
		type:"get",
		url:"json/carousel.json",
		async:true,
		success:function(deta){
			if(!deta.length){
				return;
			}
			var Div = document.getElementById("carousel");
			var Ul = Div.getElementsByTagName("ul")[0];
			Ul.id = "carouselul";
			Ul.style.height = "448px";
			Ul.style.width = "1263px";
			var hover = document.createElement("div");
			Div.appendChild(hover);
			hover.style.position = "absolute";
			hover.style.left = "1000px";
			hover.style.top = "600px";	
			hover.id = "hover";
			for(i = 0;i < deta.length; i++){
				Ul.innerHTML +="<li class = 'carouselli' style='width: 1243px; height: 448px; position: absolute;background: url(img/"+deta[i].id+") 50% 0px no-repeat;'><div style = 'width = 100%'><a href = '' style = 'width:100%;height:448px;display:block;'></a></div></li>";
				hover.innerHTML += "<span class = 'hoverspan' style = 'border-radius: 20px;display: inline-block;height: 20px;line-height: 20px;text-align: center;color: #fff;margin-left: 7px;width: 20px;background-color: rgba(0,0,0,.7);cursor: default;'>" + Number(i+1) + "</span>";
			}
			var li  = Ul.getElementsByTagName("li");
			var span = hover.getElementsByTagName("span");
			var i = 0;
			span[span.length-1].style.backgroundColor = "#CA141D";
			startMove(li[0],{opacity:100},8,50);
			var t = setInterval(run,5000);
			var t0 = null;
			function run(){
				$(".carouselli").eq(i).fadeIn().siblings().fadeOut();
				$(".hoverspan").eq(i).css("background-color","#CA141D").siblings().css("background-color","rgba(0,0,0,.7)")
				i++;
				if(i == li.length){
					i = 0;
				}
			}
			for(j = 0; j<span.length; j++){
				span[j].index = j;
				li[j].index = j;
				span[j].onmouseover = function(){
					clearInterval(t);
					clearInterval(t0);
					i = this.index;
					run();
				}
				span[j].onmouseout = function(){
					t0 = setInterval(run,5000);
				}
				li[j].onmouseover = function(){
					clearInterval(t);
					clearInterval(t0);
					i = this.index;
					run();
				}
				li[j].onmouseout = function(){
					t0 = setInterval(run,5000);	
				}
			}	
		}
	});
//	channel-floor
	$.ajax({
		type:"get",
		url:"json/channel-floor.json",
		async:true,
		success:function(data){
			if(!data.length){
				return;
			}
			var leftul = document.getElementsByClassName("home-channel")[0];
			var rightul = document.getElementsByClassName("home-promo")[0];
			for(i = 0; i < data.length; i++){
				for(j = 0; j < data[i].left.length; j++){
					leftul.innerHTML += '<li><a href = ""><img src = '+data[i].left[j].src+' /><span>'+data[i].left[j].title+"</span></a></li>";
				}
				for(k = 0; k < data[i].right.length; k++){
					rightul.innerHTML += "<li><a href = ''><img src = ' " + data[i].right[k].src + "'  /></a></li>"
				}
			}
		}
	});
//	home-recommed
	$.ajax({
		type:"get",
		url:"json/home-recommend.json",
		async:true,
		success:function(data){
			if(!data.length){
				return;
			}
			var testbanner = document.getElementById("testBanner");
			for(i = 0; i < data.length; i++){
				if(data[i].id == "false"){
					testbanner.innerHTML += "<li class = 'grid-items'><a href='' class = 'thumb'><p class = 'grid-img'><img src= ' " + data[i].img + "'  /></p><p class='grid-title'>"+data[i].title+"</p class='grid-intro'><p>"+data[i].intro+"</p><p class='grid-cost'>"+data[i].cost+"</p></a></li>";
				}else{
					testbanner.innerHTML += "<li class = 'grid-items'><a href='' class = 'thumb'><p class = 'grid-img'><img src= ' " + data[i].img + "'  /></p><p class='grid-title'>"+data[i].title+"</p ><p class='grid-intro'>"+data[i].intro+"</p><p class='grid-cost'>"+data[i].cost+"</p></a><p class = 'grid-tips'><img src = '"+data[i].id+"' /></p></li>";
				}
			}
			var items = document.getElementsByClassName("grid-items");
			//var 
//			for(i = 0; i < items.length; i++){
//				items[i].onmouseover = function(){
//					$(this).mouseout(function(e){return false;}).children("a").mouseout(function(e){return false;}).children("p").mouseout(function(e){return false;}).children("img").mouseout(function(e){return false;}).animate({"width":"160px","height":"160px","left":"-7px","top":"-7px"});
//				$(this).children("a").mouseout(function(e){return false;})
//				}
//				items[i].onmouseout = function(){
//					$(this).mouseover(function(e){return false;}).children("a").mouseover(function(e){return false;}).children("p").mouseover(function(e){return false;}).children("img").mouseover(function(e){return false;}).animate({"width":"146px","height":"146px","left":"0px","top":"0px"});
//				$(this).children("p").mouseover(function(e){return false;})
//				
//				}
//			}
		}
	});
//	轮播图2
	$.ajax({
		type:"get",
		url:"json/carousel2.json",
		async:true,
		success:function(data){
			if(!data.length){
				return;
			}
			var list = document.getElementsByClassName("ec-slider-list")[0];
			var nav = document.getElementsByClassName("ec-slider-nav")[0];
			for(i = 0; i < data.length; i++){
				list.innerHTML += "<li  class = 'list' style = 'width: 1200px; height: 110px; position: absolute; displai'><a><img src = '"+data[i].src+"'/></a></li>";
				nav.innerHTML += "<span class = 'span'></span>";
			}
			var li  = list.getElementsByTagName("li");
			var span = nav.getElementsByTagName("span");
			var i = 0;
			span[span.length-1].style.backgroundColor = "#ce2a32";
			startMove(li[0],{opacity:100},8,50);
			var time = setInterval(run,5000);
			var timer = null;
			function run(){
				$(".list").eq(i).fadeIn().siblings().fadeOut();
				$(".span").eq(i).css("background-color","#ce2a32").siblings().css("background-color","rgba(0,0,0,.7)")
				i++;
				if(i == li.length){
					i = 0;
				}
			}
			for(j = 0; j<span.length; j++){
				span[j].index = j;
				li[j].index = j;
				span[j].onmouseover = function(){
					clearInterval(time);
					clearInterval(timer);
					i = this.index;
					run();
				}
				span[j].onmouseout = function(){
					timer = setInterval(run,5000);
				}
				li[j].onmouseover = function(){
					clearInterval(time);
					clearInterval(timer);
					i = this.index;
					run();
				}
				li[j].onmouseout = function(){
					timer = setInterval(run,5000);	
				}
			}	
		}
	});

	$.ajax({
		type:"get",
		url:"json/container.json",
		async:true,
		success:function(data){
			if(!data.length){
				return;
			}
			var container = document.getElementsByClassName("container")[0];
			for(i = 0; i < data.length; i++){
				var layout = document.createElement("div");
				layout.className = "layout";
				container.appendChild(layout);
				var h = document.createElement("div");
				layout.appendChild(h);
				var b = document.createElement("div");
				layout.appendChild(b);
				h.className = "h";
				b.className = "b";
				h.innerHTML += "<h2 class = 'channel-title'>" + data[i].title + "</h2>";
				var ul = document.createElement("ul");
				h.appendChild(ul);
				ul.className = "channel-nav"
				for(j = 0; j<data[i].nav.length; j++){
					ul.innerHTML += "<li ><a href = ''>" + data[i].nav[j].title + "</a></li>";
				}
				var more = document.createElement("div");
				h.appendChild(more);
				more.className = "channel-more";
				more.innerHTML = "<span></span><span></span><span></span><a href = ''>更多</a><span></span><span></span><span></span>"
				var left = document.createElement("div");
				b.appendChild(left);
				left.className = "span-232";
				if(data[i].left.length>1){
					for(k = 0; k < data[i].left.length; k++){
						left.innerHTML += "<a class = 'grid-a-sm' href = ''><img src = '" + data[i].left[k].items + "' /></a>";
					}
				}else{
					left.innerHTML = "<a class = 'grid-a-lg' href = ''><img src = '" + data[i].left[0].items + "' /></a>";
				}
					
				var right = document.createElement("div");
				b.appendChild(right);
				right.className = "span-968";
				var ul2 = document.createElement("ul");
				right.appendChild(ul2);
				ul2.className = "grid-list";
				for(l = 0; l < data[i].right.length; l++){
					if(data[i].right[l].id == "false"){
						ul2.innerHTML += "<li class = 'grid-items'><a href = '' class = 'thumb'><p class = 'grid-img'><img src = '"+ data[i].right[l].src + "'</p><p class = 'grid-title'>" + data[i].right[l].title + "</p><p class = 'grid-desc'>" + data[i].right[l].intro + "</p><p class = 'grid-price'><span>" + data[i].right[l].cost + "</span></p></a></li>";
					}else{
						ul2.innerHTML += "<li class = 'grid-items'><a href = '' class = 'thumb'><p class = 'grid-img'><img src = '"+ data[i].right[l].src + "'</p><p class = 'grid-title'>" + data[i].right[l].title + "</p><p class = 'grid-desc'>" + data[i].right[l].intro + "</p><p class = 'grid-price'>" + data[i].right[l].cost + "</p><p class = 'grid-tips'><img src = '" + data[i].right[l].id + "'/></p></a></li>";
					}
				}
			}
			container.innerHTML += "<div class = 'hr-40'></div><div class = 'layout'><a href = ''><img src = 'img/20160923092437178.jpg '/></a></div><div class = 'hr-40'></div>";
			
				
			
		}
	});




});


	
	