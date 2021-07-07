// ==UserScript==
// @name         师德教育自动学习
// @namespace   http://i.yanxiu.com/
// @version      0.1
// @description  师德教育自动学习,自动翻页
// @author       haoshenqi
// @match        http://i.yanxiu.com/uft/train/zjfzxx/course/detail.vm*
// @icon         http://www.yanxiu.com/favicon.ico
// @grant        none
// @connect haoshenqitop.163.com
// ==/UserScript==
 
(function() {
    'use strict';
    //引入jquery
    var jq = document.createElement('script');
    jq.src = "https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);
    function wating(){
        var next = $("#daimiao")
        var xia = $("#xia")
        var text = next.text().trim()
        if(text=="下一页（1s）"){
            //触发翻页
            xia.click();
        }
        //等待16秒 循环翻页
        setTimeout(wating,16000);
    }
    wating();
})();