// ==UserScript==
// @name         B站全自动点赞动态
// @version      0.2
// @icon         https://www.bilibili.com/favicon.ico
// @author       绫浅
// @match        https://t.bilibili.com/*
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @grant        none
// ==/UserScript==

/* global $ */

dianzan();
function dianzan() {
    $(".custom-like-icon.zan").filter(
        function() {
            return( this.className.split(/\s+/).length == 2 );
        }
    ).first().trigger('click');
    setTimeout(dianzan, 1000);//点赞间隔时间，以毫秒为单位
}

shuaxin();
function shuaxin() {
    let time=30000;//刷新界面间隔时间，以毫秒为单位
    setTimeout(() => {
        location.reload()
    },time);
}
