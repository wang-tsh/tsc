//main.js
import Vue from 'vue';
import Vuex from 'vuex';
require('./globe.css');
debugger;
Vue.use(Vuex);
var greeter = require('./_Greeter.js');
//dom init;
var tsc_eb = $("#enterButton");
var tsc_Enter = $('#enterButton');
var tsc_tf = $('#tsc_topframe')
var ctlogo = $('#centerLogo');
var tsc_hdr = $('#tsc_header');
var tsc_ltp = $('#tsc_leftpan');
var tmLogo = $('#tscmainLogo');
var tsc_cma =$('#tsc_centermain');
var hicon = $('#headericon');


$(document).ready(function() {
    tsc_tf.hide().fadeIn(500,(function(){
        var id_temp,spdTemp;
        for(var i = 0; i<7; i++){
            id_temp = '#piclogo'+ i;
            spdTemp = i*100;
            $(id_temp).animate({opacity:'1'},spdTemp);
        }
    }));

});


//button hover animation
tsc_eb.hover(function(){
    tsc_eb.animate({opacity:'1'},300);
    $(".eb_fontSml").animate({zoom:'1.1'},300);
    tsc_eb.css('box-shadow','0 0 8px #62CCE9')
},function(){
    tsc_eb.animate({opacity:'0.7'},300);
    tsc_eb.css('box-shadow','0 0 0 #62CCE9');
    $(".eb_fontSml").animate({zoom:'1'},300);

});

hicon.hover(function(){
    hicon.css('box-shadow','0 0 8px #62CCE9')
},function(){
    hicon.css('box-shadow','0 0 0 #62CCE9');
});

//button click
tsc_Enter.click(function(){

    //page animation welcomepage
    tsc_tf.animate({top:'-100%',opacity:'0'},800);
    ctlogo.animate({zoom:'0.3'},600);
    tsc_Enter.animate({zoom:'0.2'},600);

    //page animation mainframe
    tsc_hdr.animate({top:'0',opacity:'1'},400,(function(){
        tsc_ltp.animate({left:'0'},400,(function(){
            tmLogo.animate({opacity:'1'},400);
        }));
        tsc_cma.fadeIn(300);
    }));



});


// document.body.appendChild(greeter());