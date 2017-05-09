/**
 * Created by wangtingshun on 2017/5/8.
 */
const state = {
    isEx: false
}
const mutations = {
    login(state){//login方法
        state.isEx =true;
    }
}

export default {
    state,
    // getters,
    // actions,
    mutations
}