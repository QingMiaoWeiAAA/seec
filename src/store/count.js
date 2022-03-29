/*
 * @Author: your name
 * @Date: 2022-03-16 11:59:07
 * @LastEditTime: 2022-03-16 12:01:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \app1\src\store\count.js
 */
// 求和相关的配置
export default{
    namespaced:true,//开启命名空间
    actions:{
        jiaOdd(context,value){
            if(context.state.sum%2){
                context.commit('JIA',value);
            }
        },
        jiaWait(context,value){
            setTimeout(() => {
                context.commit('JIA',value);
            }, 500);
        },
    },
    mutations:{
        JIA(state,value){
            // 参数1:state数据
            // 参数2:传入的值
            state.sum+=value
        },
        JIAN(state,value){
            state.sum-=value
        },
    },
    state:{
        sum:0,
        school:"北京",
        subject:"前端",
    },
    getters:{
        bigSum(state){
            // 可以拿到一个参数是 state数据
            // 返回值就是bigSum的值,跟计算属性很像
            // 会把state中的数据拿到,按照逻辑进行计算,但是不会修改state中的数据
            return state.sum*10
        }
    }
}
