/***********************************************************
	Filename: js/pc.js
	Note	: pc、手机、平板终端判断
	Version : 1.0
	Web		: www.bjstos.com
	Author  : bjstos
	Update  : 2019年07月01日
	PS：关键点为initial-scale值，需要获取移动设备的宽度，initial-scale = 设备宽度 / 网站页面宽度
***********************************************************/

var deviceWidth = parseInt(window.screen.width);  //获取当前设备的屏幕宽度 

var deviceScale = deviceWidth / 1200;  //得到当前设备屏幕与120之间的比例，之后我们就可以将网页宽度固定为1200px 

//alert("deviceScale:" + deviceScale );
	
var os = function (){
	var ua = navigator.userAgent,
	isWindowsPhone = /(?:Windows Phone)/.test(ua),
	isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
	isAndroid = /(?:Android)/.test(ua),
	isFireFox = /(?:Firefox)/.test(ua),
	isChrome = /(?:Chrome|CriOS)/.test(ua),
	isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
	isPhone = /(?:iPhone)/.test(ua) && !isTablet,
	isPc = !isPhone && !isAndroid && !isSymbian;
	return {
		isTablet: isTablet,
		isPhone: isPhone,
		isAndroid: isAndroid,
		isPc: isPc
	};	
}();

/*
//注释部分有时候对iphone无效
if (!os.isPc) 
	{
		
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//替换变量deviceScale		
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />');
	}
else if (os.isPc) 
{
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1">');
}
else if (os.isTablet) 
{
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />111');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//替换变量deviceScale
		
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		
}
*/

//经过调式，需要分别判断进行页面初始值initial-scale适配，安卓、iphone、ipad均调式通过
if (os.isAndroid)
	{   
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//替换变量deviceScale
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />isAndroid');
	} 
else if(os.isPhone)
	{
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//替换变量deviceScale
		//alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />');
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />isPhone');
		
	} 
else if (os.isTablet)
	{
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1">');				//替换变量deviceScale
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />isTablet');
	} 
else if (os.isPc) 
	{
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1">');
	}
else
	{
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1">');				//替换变量deviceScale
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />else');
	}

