/***********************************************************
	Filename: js/pc.js
	Note	: pc���ֻ���ƽ���ն��ж�
	Version : 1.0
	Web		: www.bjstos.com
	Author  : bjstos
	Update  : 2019��07��01��
	PS���ؼ���Ϊinitial-scaleֵ����Ҫ��ȡ�ƶ��豸�Ŀ�ȣ�initial-scale = �豸��� / ��վҳ����
***********************************************************/

var deviceWidth = parseInt(window.screen.width);  //��ȡ��ǰ�豸����Ļ��� 

var deviceScale = deviceWidth / 1200;  //�õ���ǰ�豸��Ļ��120֮��ı�����֮�����ǾͿ��Խ���ҳ��ȹ̶�Ϊ1200px 

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
//ע�Ͳ�����ʱ���iphone��Ч
if (!os.isPc) 
	{
		
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//�滻����deviceScale		
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
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//�滻����deviceScale
		
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		
}
*/

//������ʽ����Ҫ�ֱ��жϽ���ҳ���ʼֵinitial-scale���䣬��׿��iphone��ipad����ʽͨ��
if (os.isAndroid)
	{   
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//�滻����deviceScale
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />isAndroid');
	} 
else if(os.isPhone)
	{
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1" />');		//�滻����deviceScale
		//alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />');
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="full-screen" content="yes">');
		document.write('<meta name="x5-fullscreen" content="true">');
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />isPhone');
		
	} 
else if (os.isTablet)
	{
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1">');				//�滻����deviceScale
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
		document.write('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1">');				//�滻����deviceScale
		alert('<meta name="viewport" content="width=device-width,initial-scale=' + deviceScale + ',maximum-scale=1.0" />else');
	}

