/**
 * Created by wangtingshun on 2017/5/8.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import topFrameStore from './modules/topFrameStore.js'
// import mainFrameStore from './modules/mainFrameStore.js'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        logined: "top-frame"
    },
    mutations :{
        login(state){//login方法
            state.logined ="main-frame";
        }
    }
    // modules: {
    //     topFrameStore,
    //     mainFrameStore
    // }
})
