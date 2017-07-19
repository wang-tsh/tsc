<script>
    import subMenu  from './tsc-submenu'
    import tscMenuItem from './tsc-mitem'

    var getClient = function clientRender(h,clientRouter,menuType){
        if(menuType==="client"&&clientRouter.length>0){
            return clientRouter.map(function (value) {
                debugger;
                if(value.children===null||value.children.length===0){
                    return h(tscMenuItem,{
                            props:{
                                config:value,
                                level:1

                            }
                        }
                    )
                }else{
                    return h(subMenu,{
                            props:{
                                config:value,
                                level:1
                            }
                        }
                    )
                }

            })
        }//server to do
    }
    export default{
        name: 'TSCMenu',

        componentName: 'TSCMenu',
        props:{
            menuType: {//菜单类型。"client","server"
                type: String,
                required: true
            },
            routerData :{//菜单router数据
                type: Array
            },
            beforeItemClick:{
                type: Function,
                default: function (item) {
                    return true
                }
            },
            afterItemClick:{
                type: Function,
                default: function (item) {
                    return true
                }
            },
            afterSubmenuClick:{
                type: Function
            }

        },
        methods: {
            handleItemClick:function(item){
                if(this.beforeItemClick(item)){
                    this.$router.push(item.config.path)
                    this.afterItemClick(item)
                }

            },
            handleSubmenuClick:function(item){
                if(this.afterSubmenuClick)
                {
                    this.afterSubmenuClick(item)
                }
            }
        },
        render: function (h) {
            return h('nav', {
                'class': {
                    tscMenu: true,
                }
            }, //此处遍历了加载进来的clientRouter,必须加[]只有数组才会生成子关系，也是没谁了
                [h('ul',getClient(h,this.routerData,this.menuType))]
//            getClient(h,this.routerData,this.menuType)
            )
        },
        mounted() {
            this.$on('item-click', this.handleItemClick);
            this.$on('submenu-click', this.handleSubmenuClick);
        }

    }
</script>
<style>

</style>