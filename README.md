# ppc.js

最近做了一个网站，页面与手机终端（安卓、iphone、ipad）适配通过，适配了Windows Phone、黑莓、SymbianOS，并在chorme模拟终端上测试通过。

    var os = function (){
      var ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isBlackBerry = /(?:BlackBerry)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone || isBlackBerry,	
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
        isSymbian: isSymbian,
        isPc: isPc
      };	
    }();

添加了在手机终端上延时5秒，弹出拨打电话提示框。

    function callphone(){
      var url = "tel:010-87713983";//定义一个超链接地址
      var isTrue = confirm("请拨打电话联系我们？");

      if (isTrue){
        window.location.href = url;
        }
    }

在if条件属于手机终端下弹出提示框，调用callphone()：
     setTimeout("callphone()", 5*1000);
