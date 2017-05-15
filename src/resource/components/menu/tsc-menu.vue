<script>
    import subMenu  from './tsc-submenu'

    var getClient = function clientRender(h,clientRouter,menuType){
        if(menuType==="client"&&clientRouter.length()>0){
            return clientRouter.map(function (value) {
                return h(subMenu,{
                        props:{
                            title:value.title
                        }
                    }
                )
            })
        }
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
            }, //此处遍历了加载进来的clientRouter
                getClient(h,this.routerData,this.menuType)
            )}
    }
</script>