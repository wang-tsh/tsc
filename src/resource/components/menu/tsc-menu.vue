<script>
    import subMenu  from './tsc-submenu'

    var getClient = function clientRender(h,clientRouter,menuType){
        if(menuType==="client"&&clientRouter.length>0){
            return clientRouter.map(function (value) {
                return h(subMenu,{
                        props:{
                            title:value.title,
                            path:value.path,
                            config:value
                        }
                    }
                )
            })
        }//server to do
    }
    export default{
        props:{
            menuType: {//菜单类型。"client","server"
                type: String,
                required: true
            },
            routerData :{//菜单router数据
                type: Array
            }
        },
        render: function (h) {
            return h('nav', {
                'class': {
                    navTree: true,
                }
            }, //此处遍历了加载进来的clientRouter,必须加[]只有数组才会生成子关系，也是没谁了
                [h('ul',getClient(h,this.routerData,this.menuType))]
//            getClient(h,this.routerData,this.menuType)
            )}
    }
</script>
<style>

</style>