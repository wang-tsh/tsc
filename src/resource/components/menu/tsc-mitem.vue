<template>
<li v-bind:style="{textIndent:textIndent,backgroundColor:backgroundColor}"  v-on:click.stop="jump"><i class="fa  fa-lg" :class="this.config.icon"></i>{{config.title}}</li>
</template>

<script>
    import Emitter from 'element-ui/src/mixins/emitter';
    export default{
        name: 'TSCMenuItem',

        componentName: 'TSCMenuItem',
        props:{
            config:{
                type:Object
            },
            level:{},
            backgroundColor:{
                type: String,
                required: false
            }

        },
        mixins: [Emitter],
        computed:{
            textIndent :function (){
                return this.level*5 +'px';
            }
        },
        methods:{
            jump:function(){
                this.dispatch('TSCMenu', 'item-click', this);
                this.$emit('click', this);
            }
        }
    }
</script>
<style scoped>
    li{
        cursor:pointer; font-size:13px; color:#323232; line-height:30px; border-bottom:1px solid #e3e3e3;
    }
</style>

