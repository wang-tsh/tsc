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
            <!--<ul id="tsc_menu">
                <li>Programing</li>
                <li>Example</li>
                <li>Demo</li>
                <li>About Us</li>
                <li>Download</li>
            </ul>-->
            <tsc-menu
                :menuType="menuType"
                :routerData="cRouter"
                :beforeItemClick="beforeItem"
                :afterSubmenuClick="afterSub"
        ></tsc-menu>
        </div>
        <div id="tsc_centermain">

            <div id="nomalPan">
                <div class="tsc_barFont">欢迎 进入系统</div>
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>
<script>
    import tscMenu from '../../menu/tsc-menu.vue'
    import clientRouter from '../../../config/router/clientRouter.json'
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import 'font-awesome/css/font-awesome.min.css'
    Vue.use(VueRouter)

    export default{
        data:function () {
            return {
                menuType: "client",
                cRouter:clientRouter
            }
        },
        components:{
            tscMenu
        },
        methods:{
            beforeItem: function(item){
                if(item.config.name==="user")
                {
                    return false
                }else{
                    return true
                }
            },
            afterSub:function(item){
                console.info("sub")
            }
        },
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