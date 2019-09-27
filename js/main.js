 window.onload=function(){     /*门锁和左右门*/
var oLock = document.querySelector(".lock");
 var   oL_door = document.querySelector(".L_door");
  var  oR_door = document.querySelector(".R_door");
    /*开门鞭炮声*/
var oAudio = document.createElement('audio'),
    oAudioLock = document.createElement('audio');
     oAudioLock.src = 'audio/lock_open.wav'
	oAudio.src = "audio/222.wav";
	/*左右灯笼*/
var oCL_div = document.querySelector(".CL_div"),
    oCR_div = document.querySelector(".CR_div")
//top中间的文字
var oTop_CTxt = document.querySelector('.top_C');
var timer;
var i = 1;
oLock.onclick = function(){
 	oAudioLock.play();
    oLock.style.cssText = ';transition:3s;transform:rotateZ(180deg);transform-origin:50% 50% 0'; 
    timer = setInterval(openDoor,3000); 
    oTop_CTxt.style.cssText = "color:red;font-size:25px;font-family:'楷体';background:pink;"; 
    top_CTxt();   

};

	var d = 0;
	var str = "新的一年，祝贺大家新年愉快！";	

function top_CTxt(){
	oTop_CTxt.innerHTML += str.charAt(d);
	d++;
	Txttimer = setTimeout(top_CTxt,300);
	if(i == str.length){
		clearTimeout(Txttimer);
	}

}
 function openDoor(){	
    i--; 		
	if(i=0){
		oLock.style.display = 'none';		
	}else if(i<0){
		window.clearInterval(timer);
	}
	oLock.style.opacity = i;

	oL_door.style.cssText=";transform-style:preserve-3d;transition:5s;transform-origin:left;transform:rotateY(90deg);background:url(images/mennv.jpg);background-size:100% 100%";
	oR_door.style.cssText=";transform:rotateY(-90deg);transform-origin:100% 99% 0;transition:5s;background:url(images/mennv.jpg);background-size:100% 100%";
	oAudio.play();
	/*换灯笼*/
	oCL_div.style.cssText = ';transition:3s;background:url(images/dl-f.png);background-size:100% 100%';
	oCR_div.style.cssText = ';transition:3s;background:url(images/dl-f.png);background-size:100% 100%';
	timerAfter = setInterval(huantu,15000);
/*
	clearMainTimer = setInterval(function(){
		oMainDiv.style.background = '#fff';
  oMainDiv.innerHTML = '';
  window.location="secondPage/fangYanHua.html";
},30000);*/
 };

 

var timerAfter,clearMainTimer;
var p=1;
//afterPlan的轮播图
var oAfterPlan = document.querySelector('.afterPlan');



function huantu(){
p++;

oAfterPlan.style.background = 'url(images/lunbo/'+p+'.jpg)';
oAfterPlan.style.cssText += 'background-size:100% 100%';
if(p>=14){
	p=1;
}
}
/*点击去除div-main里的所有内容*/
var oMainDiv = document.querySelector('.main');
var oBtn = document.getElementById('btn').onclick = function(){
    
}

}