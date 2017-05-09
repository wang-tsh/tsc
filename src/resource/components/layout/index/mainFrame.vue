<template>
    <div id="tsc_mainFrame">
        <div id="tsc_header">
            <img id="tscmainLogo" src="./image/mainLogo.png">
        </div>
        <div id="tsc_leftpan">
            <div id="userPan">

                <div id="headericon"><img src="./image/header.png" width="100%" height="100%"></div>
                <div id="username">Administrator</div>
            </div>
            <ul id="tsc_menu">
                <li>Programing</li>
                <li>Example</li>
                <li>Demo</li>
                <li>About Us</li>
                <li>Download</li>
            </ul>
        </div>
        <div id="tsc_centermain">
            <div class="tsc_barFont">欢迎 进入系统</div>
            <div id="nomalPan"></div>
        </div>
    </div>

</template>
<script>
    export default{
        mounted(){
            //do something
//            this.$store.subscribe((mutation, state) => {
//                debugger;
//                if(mutation.type==="login"){
//                    console.log(mutation);
                    //page animation mainframe
                    var tsc_hdr = $('#tsc_header');
                    var tsc_ltp = $('#tsc_leftpan');
                    var tmLogo = $('#tscmainLogo');
                    var tsc_cma =$('#tsc_centermain');

                    tsc_hdr.animate({top:'0',opacity:'1'},400,(function(){
                        tsc_ltp.animate({left:'0'},400,(function(){
                            tmLogo.animate({opacity:'1'},400);
                        }));
                        tsc_cma.fadeIn(300);
                    }));
//                }


//            });
        }
    }
</script>