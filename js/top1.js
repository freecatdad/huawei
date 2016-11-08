$(function(){
//	fixed
	$('#fixed').css({top: ($(window).height() - $('#fixed').outerHeight())/2});
//	顶部
	$(".s-sub-li").eq(2).mouseover(function(){
		/* Act on the event */
		$(".s-sub-hid")[0].style["display"] = "block";
		$(".s-sub-li i")[0].style["backgroundPosition"] = "0 0";
		this.style["background"] = "none";
	}).mouseout(function() {
		/* Act on the event */
		$(".s-sub-hid")[0].style["display"] = "none";
		$(".s-sub-li i")[0].style["backgroundPosition"] = "-34px 0"
		this.style["background"] = 'url("img/bg65.png") no-repeat right';
	});
	$(".s-main-nav").eq(0).mouseover(function() {
		/* Act on the event */
		$(".s-nav-hid")[0].style["display"] = "block";
		$(".s-main-nav i")[0].style["backgroundPosition"] = "0 0";
	}).mouseout(function() {
		/* Act on the event */
		$(".s-nav-hid")[0].style["display"] = "none";
		$(".s-main-nav i")[0].style["backgroundPosition"] = "-34px 0";
	});
//	header
	$(".search-input").eq(0).focus(function() {
		/* Act on the event */
		$(".searchbar")[0].style["display"] = "none";
	}).blur(function() {
		/* Act on the event */
		$(".searchbar")[0].style["display"] = "block";
	});
	$("#i-mall").mouseover(function() {
		/* Act on the event */
		$(".i-mall-h")[0].style["display"] = "block";
		var i = document.getElementById("mall-i");
		i.style["backgroundPosition"] = "-234px 0px";
	}).mouseout(function() {
		/* Act on the event */
		$(".i-mall-h")[0].style["display"] = "none";
		var i = document.getElementById("mall-i");
		i.style["backgroundPosition"] = "-234px -2px";
	});
	$("#i-shopcar").mouseover(function(event) {
		/* Act on the event */
		$(".i-shopcar-h1")[0].style["display"] = "block";
		var i = document.getElementById("shopcar-i");
		i.style["backgroundPosition"] = "-234px 0px";
	}).mouseout(function(event) {
		/* Act on the event */
		$(".i-shopcar-h1")[0].style["display"] = "none";
		var i = document.getElementById("shopcar-i");
		i.style["backgroundPosition"] = "-234px -2px";
	});
//	二维码

	$("#code1-d").mouseover(function(){
		this.style["backgroundColor"] = "red";
		var code1=document.getElementById("code1");
		var code2=document.getElementById("code2");
		startMove(code1,{opacity:100},8,70);
		startMove(code2,{opacity:0},8,70);
		var code2d = document.getElementById("code2-d");
		code2d.style["backgroundColor"] = "#888";
	});
	$("#code2-d").mouseover(function(){
		this.style["backgroundColor"] = "red";
		var code1=document.getElementById("code1");
		var code2=document.getElementById("code2");
		startMove(code2,{opacity:100},8,70);
		startMove(code1,{opacity:0},8,70)
		var code1d = document.getElementById("code1-d");
		code1d.style["backgroundColor"] = "#888";
	});
});
//	二级菜单
	$.ajax({
		type:"get",
		url:"json/secondary menu.json",
		async:true,
		success:function(deta){
			if(!deta.length){
				return;
			}
			a = deta.length;
			var nav= document.createElement('div');
			var oGoods = document.getElementsByClassName("all-goods")[0];
			oGoods.appendChild(nav);
			var oul = document.createElement('ul');
			nav.appendChild(oul);
			nav.style.backgroundColor = "white";
			nav.id = "second";
			nav.style.display = "none";
			oGoods.onmouseover = function(){
				nav.style.display = "block";
			};
			oGoods.onmouseout = function(){
				nav.style.display = "none";
			};
			for(var i = 0; i < deta.length; i++){
				var oli = document.createElement('li');
				oli.className = "secondli";
				var d1 = document.createElement('div');
				d1.className = "lid1"
				var d2 = document.createElement('div');
				d2.className = "lid2";
				d2.style.display = "none";
				oul.appendChild(oli);
				oli.appendChild(d1);
				oli.appendChild(d2);
				d1.innerHTML ="<h3><a href = ''><span>"+deta[i].title+"</span></a></h3>";
				for(j = 0;j<deta[i].deta.length;j++){
					if(deta[i].deta[j].id == "true"){
						d1.innerHTML += "<a href = ''><span>"+deta[i].deta[j].title+"<i><img src = 'img/hot2.png'/></i></span></a>";
					}else{
						d1.innerHTML += "<a href = ''><span>"+deta[i].deta[j].title+"</span></a>";
					}	
				}
				for(k = 0;k<deta[i].hub.length;k++){
					if(deta[i].hub[k].id == "true"){
						d2.innerHTML += "<li class = 'd2li'><a href = ''><span>"+deta[i].hub[k].title+"<i><img src = 'img/hot2.png'/></i></span></a></li>";
					}else{
						d2.innerHTML += "<li class = 'd2li'><a href = ''><span>"+deta[i].hub[k].title+"</span></a></li>";
					}
				}
				if(deta[i].dl){
					var dl = document.createElement("dl");
					if(deta[i].hub.length + deta[i].dd.length > 10){
						var d3 = document.createElement("div");
						d3.className = "lid2 lid3";
						d3.style.backgroundColor = "#f7f7f7";
						d2.appendChild(d3);
						d3.appendChild(dl);
					}else{
						d2.appendChild(dl);
					}
					dl.innerHTML +="<dt><span>"+deta[i].dl.title+"</span></dt>"
					for(l = 0;l<deta[i].dd.length;l++){
						if(deta[i].dd[l].id =="true"){
							dl.innerHTML +=  "<dd><a href = ''><span>"+deta[i].dd[l].title+"<i><img src = 'img/hot2.png'/></i></span></a></dd>"
						}else{
							dl.innerHTML +=  "<dd><a href = ''><span>"+deta[i].dd[l].title+"</span></a></dd>"
						}
					}
				}
				oli.onmouseover = function(){
					$(this).children(".lid2")[0].style["display"] = "block";
					$(this).children(".lid1")[0].style["backgroundColor"] = "#000000";
					$(this).children(".lid2")[0].style["backgroundColor"] = "#F7F7F7";
				}
				oli.onmouseout = function(){
					$(this).children(".lid2")[0].style["display"] = "none";
					$(this).children(".lid1")[0].style["backgroundColor"] = "rgba(0,0,0,0.7)";
					$(this).children(".lid2")[0].style["backgroundColor"] = "white";
				}
			}
		}
	});
//	导航
	$.ajax({
		type:"get",
		url:"json/menu.json",
		async:true,
		success:function(deta){
			if(!deta.length){
				return;
			}
			var ul = document.createElement("ul");
			ul.id = "never";
			var navmain = document.getElementsByClassName("nav-main")[0];
			navmain.appendChild(ul);
			for(i = 0;i<deta.length;i++){
				if(deta[i].id != "false"){
					ul.innerHTML += "<li><a href=" + deta[i].href + " style = 'display: block;height: 40px;font-size: 14px;color: white;padding: 0 8px;'>" + deta[i].title + "<img src = 'img/" + deta[i].id + ".png' style = 'position:relative;left:-30px;top:-23px'/></a></li>";
				}else{
					ul.innerHTML += "<li><a href=" + deta[i].href + " style = 'display: block;height: 40px;font-size: 14px;color: white;padding: 0 21px;'>" + deta[i].title + "</a></li>";
				}
			}
		}
	});		

	
	
	

	
