/**
 * Created by wangtingshun on 2017/5/8.
 */
const state = {
    isEx: true//是否还存在，如果已经登录则该状态已经变成否
}
const mutations = {
    login(state){//login方法
        state.isEx =false;
    }
}
export default {
    state,
    // getters,
    // actions,
    mutations
}