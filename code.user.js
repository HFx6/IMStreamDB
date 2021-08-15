// ==UserScript==
// @name         IMStreamDB
// @namespace    http://imdb.com/
// @version      2.5.1
// @description  Stream your favorite movies directly in IMDB
// @author       ZombieTaco
// @include      *://www.imdb.com/title/*
// @homepageURL  https://github.com/ZombieTaco/IMStreamDB
// @supportURL   https://github.com/ZombieTaco/IMStreamDB/issues
// @grant        none
// ==/UserScript==
var api_key = "193447211";
$(document).ready(function() {
    'use strict';
    var currentTT = document.head.querySelector("[property=pageId]").content;
    $(".subtext").append("<style>#streamlink{height:15px;float:right;cursor:pointer;color:#e4bb24;text-decoration:none;}#streamlink:hover{text-shadow: 0px 0px 6px #846e26;}</style><a id='streamlink' onclick='stream()'>STREAM</a>");
    window.stream = function(){
        $(".slate_wrapper").html("<div id='loaderwhile'><style>.loaderstream{border:5px solid #767676;border-radius:50%;border-top:5px solid #e4bb24;width:20px;height:20px;-webkit-animation:spin .5s linear infinite;animation:spin .5s linear infinite;margin:15% auto 0}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}</style><div class='loaderstream'></div></div><iframe id='streamframe' src='https://videospider.in/getvideo?key="+api_key+"&video_id="+currentTT+"' width='667' height='268' frameborder='0' style='display: none;' allowfullscreen='true' scrolling='no'></iframe>");
        document.getElementById('streamframe').onload = function() {
            $('#loaderwhile').remove();
            document.getElementById("streamframe").style.display="";
        };
    };
});

