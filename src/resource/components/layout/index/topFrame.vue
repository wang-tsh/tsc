<template>
    <!-- welcomeFrame tsc -->
    <div id="tsc_topframe">
        <div id="logoHead">
            <div id="centerLogo"></div>
            <p>欢迎访问EAF技术开发平台</p>
            <p class="en_Logo">Welcome visit programing which product by eaf</p>
            <p class="en_Logo">You can get all programing detail </p>
        </div>
        <div id="enterPan">
            <div id="enterButton" @click="enter">
                <div class="eb_fontSml">click here</div>
                <div class="eb_font">ENTER</div>
            </div>
        </div>
        <div id="tsc_footerLogo">
            <img id="piclogo1" src="./image/logo1.png">
            <img id="piclogo2" src="./image/logo2.png">
            <img id="piclogo3" src="./image/logo3.png">
            <img id="piclogo4" src="./image/logo6.png">
            <img id="piclogo5" src="./image/logo5.png">
            <img id="piclogo6" src="./image/logo4.png">
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    export default {
        computed: mapState({
            // 箭头函数可以让代码非常简洁
            topEx: state => state.topFrameStore.isEx
        }),
        methods:{
           enter(){
               //所有的动画操作交给css
               // 解放了js~同学
               this.$store.commit('login')
                   //page animation welcomepage
//                   $('#tsc_topframe').animate({top:'-100%',opacity:'0'},800);
//                   $("#centerLogo").animate({zoom:'0.3'},600);
//                   $(this).animate({zoom:'0.2'},600);

                   //page animation mainframe
//                   tsc_hdr.animate({top:'0',opacity:'1'},400,(function(){
//                       tsc_ltp.animate({left:'0'},400,(function(){
//                           tmLogo.animate({opacity:'1'},400);
//                       }));
//                       tsc_cma.fadeIn(300);
//                   }));




           }
        }
    }
</script>