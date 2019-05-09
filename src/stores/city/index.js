//状态码
const state = {
    //初始名字 ,查看之前是否有选择过城市,(去缓存中获取)
    nm: window.localStorage.getItem('nowNm') || '北京',
    id:window.localStorage.getItem('nowId') ||  1,
};

const actions = {

};

const mutations = {
    //最好名字大写,表示状态管理方法
    CITY_INFO(state,payload){
    state.nm = payload.nm;
    state.id = payload.id;
    }
};

//对外接口
export default{
    //命名空间
    namespaced:true,
    state,
    actions,
    mutations
}