<template>
    <li>
        <router-link :to="path">
            <a href="#">
                <i class="fa fa-window-maximize fa-lg"></i>
                {{title}}
        <i class="fa fa-chevron-down fa-lg fr_tsc listToggle"></i>
            </a>
        </router-link>
    </li>
</template>
<script>
    import 'font-awesome/css/font-awesome.min.css'
    export default{
        props:{
            title:{
                type: String,
                required: true
            },
            path:{
                type: String,
                required: true
            },
            config{
                type:Object
            }

        },
        methods:{
//            jump:function(){
//                debugger;
//                this.$router.push("user")
//            }
        }
//        render:function (h) {
//            return h('ul',)
//        }
    }
</script>
<style >

</style>