import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


var state={
    shoucang:520,
    pinglun:32,
    cart:3,
    tit:'',
    nav:['男士专区','服饰配饰','鞋靴箱包','美妆护肤','母婴儿童','时尚科技','个护保健','运动户外',]
}
var mutations={
    shoucang:function(state){
        state.shoucang++;
    },
    pinglun:function(state){
        state.pinglun++;
    },
    addCart:function (state) {  
        state.cart++;
    }
}
export default new Vuex.Store({
    state,
    mutations
})