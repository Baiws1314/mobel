import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


var state={
    shoucang:520,
    pinglun:32,
    cart:3
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