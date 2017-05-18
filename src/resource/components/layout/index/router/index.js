/**
 * Created by wangtingshun on 2017/5/8.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from '../../../../config/router/clientRouter.json'
import path from 'path'
import  dirVars from '../../../../../../webpack_config/base/dir-structure.config.js'
Vue.use(VueRouter);
//
//  function buildLazy(componentPath,name){
//      // debugger;
// //     // return  r => require.ensure([], () => r(require('componentPath')), '/bar')
// //     const comppath =path.relative(path.resolve(dirVars.componentsDir,'./layout/index/router'),path.resolve(dirVars.resourceDir,componentPath))
// //     // const comp =resolve => require([comppath], resolve)
// //     const comp = resolve => require(["../../../../"+componentPath], resolve)
// //      const comp = r => require.ensure([], () => r(require('../../../../'+componentPath)))
//     // const comp =resolve =>System.import("../../../../"+componentPath)
//  //     const comp = () => ({
//  //         // 需要加载的组件. 应当是一个 Promise
//  //         component: import('../../../../'+componentPath),
//  //         // loading 时应当渲染的组件
//  //         // loading: LoadingComp,
//  //         // 出错时渲染的组件
//  //         // error: ErrorComp,
//  //         // 渲染 loading 组件前的等待时间。默认：200ms.
//  //         delay: 200,
//  //         // 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
//  //         timeout: 3000
//  // })
//     return  comp
// }
// function buildRouter(routerConfig){
//     if(routerConfig===null)
//     {
//         return []
//     }
//     return routerConfig.map(function(value){
//         const route =
//             {
//                 path:value.path,
//                 component:  buildLazy(value.path,value.name),
//                 children:buildRouter(value.children),
//                 name:value.name
//             }
//        return route
//     });
// }
var router =new VueRouter({

    // routes:router
})
const components = require.context('../../../../common', true, /.vue$/)
const routeConfig = []
debugger;
components.keys().forEach((n) => {
    let first = n.indexOf("/");
    let second = n.lastIndexOf("/");

    routeConfig.push(createRouteConfig(n.slice(first,second),  n.slice(1)))
})
function createRouteConfig (path, view) {

    return {
        path:path,
        component: function(resolve) {
            const handler = require('bundle-loader?name=[name]!../../../../common' + view)//此处会扫描该包下所有文件，对应生成文件
            handler(module => resolve(module))
        }
    }
}
router.addRoutes(routeConfig)
// const router =buildRouter(routerConfig)
export default router
