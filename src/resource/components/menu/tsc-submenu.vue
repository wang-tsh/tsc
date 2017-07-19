<template>
    <li  v-bind:style="{textIndent:textIndent,backgroundColor:bgcolor}"  @click.stop="expandOrClose">
        <!--<router-link :to="config.path">-->
                <i class="fa fa-lg" :class="this.config.icon"></i>
                {{config.title}}
                <i :class="[isActive ? 'fa-chevron-down' : 'fa-chevron-right', 'fa','fa-lg','fr_tsc','listToggle']"></i>
                <ul :class="{ closelist: !isActive }">
                      <component  v-bind:is="childComp(item)" :backgroundColor="childBgColor" :level="childLevel" :config="item" :key="item.path" v-for="item in config.children"></component>
                    <!--<li @click.stop="childjump(item)"  v-for="item in config.children">
                          <i class="fa fa-file-o fa-lg"></i>{{item.title}}
                      </li>-->
                </ul>
          <!--</router-link>-->
    </li>
</template>
<script>
    import 'font-awesome/css/font-awesome.min.css'
    import tscMenuItem from './tsc-mitem'
    import Emitter from 'element-ui/src/mixins/emitter';
    var subMenu = {
        name: 'TSCSubmenu',
        componentName: 'TSCSubmenu',
        mixins: [Emitter],
        data: function () {
            return {
                isActive: false
            }
        },
        computed:{
            textIndent :function (){
                return this.level*5 +'px';
            },
            childLevel :function(){
                return this.level+1;
            },
            bgcolor :function (){
                return this.backgroundColor ? this.backgroundColor : "#ffffff"
            },
            childBgColor :function(){
                //此方法用于计算子元素背景颜色，比父层级加深5度
                let returnColor="#";
                let rgb =this.bgcolor.substring(1);
                let rgbArray =new Array();
                let r =rgb.substr(0,2);
                let g =rgb.substr(2,2);
                let b =rgb.substr(4,2);
                returnColor+=(parseInt(r,16)-5>0?parseInt(r,16)-5:0)>0x0f?(parseInt(r,16)-5>0?parseInt(r,16)-5:0).toString(16):"0"+(parseInt(r,16)-5>0?parseInt(r,16)-5:0).toString(16);
                returnColor+=(parseInt(g,16)-5>0?parseInt(g,16)-5:0)>0x0f?(parseInt(g,16)-5>0?parseInt(g,16)-5:0).toString(16):"0"+(parseInt(g,16)-5>0?parseInt(g,16)-5:0).toString(16);
                returnColor+=(parseInt(b,16)-5>0?parseInt(b,16)-5:0)>0x0f?(parseInt(b,16)-5>0?parseInt(b,16)-5:0).toString(16):"0"+(parseInt(b,16)-5>0?parseInt(b,16)-5:0).toString(16);
                return returnColor
            }

        },
        props:{
            config:{
                type:Object
            },
            level:{

            },
            backgroundColor:{
                type: String,
                required: false
            }

        },
        methods:{
            childjump:function(item){
                this.$router.push(this.config.path +item.path)//拼接

            },
            jump:function(){
                this.$router.push(this.config.path)
            },
            childComp:function(item){
                if(item.children===null||item.children.length===0){
                    return "tsc-menu-item"
                }
                else{
                    return "TSCSubmenu"
                }
            },
            expandOrClose:function(){
                this.isActive =!this.isActive
                this.dispatch('TSCMenu', 'submenu-click', this);
                this.$emit('click', this);
            }
        },
        components:{
            tscMenuItem
        }

    }
    export default subMenu
</script>
<style scoped>
li{
    cursor:pointer; font-size:13px; color:#323232; line-height:30px;  border-bottom:1px solid #e3e3e3;
}
</style>