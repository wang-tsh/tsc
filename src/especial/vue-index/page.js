/**
 * Created by wangtingshun on 2017/5/2.
 */
import Vue from 'vue';
import index from '../../resource/components/layout/index/index.vue';
import './globe.css';
import store from '../../resource/components/layout/index/store'

new Vue({
    el: '#app',
    store,
    render: h => h(index),
    mounted :function () {
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
        tsc_tf.hide().fadeIn(500,(function(){
            var id_temp,spdTemp;
            for(var i = 0; i<7; i++){
                id_temp = '#piclogo'+ i;
                spdTemp = i*100;
                $(id_temp).animate({opacity:'1'},spdTemp);
                }
            }));




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


    }
})
