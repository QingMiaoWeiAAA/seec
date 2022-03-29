// 引入vue
import Vue from'vue'
// 引入Vuex
import Vuex from 'vuex'
import countOptions from './count.js'
import PersoncountOptions from './persion.js'

Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules:{
        countOptions,
        PersoncountOptions
    }
}) 