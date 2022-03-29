/*
 * @Author: your name
 * @Date: 2022-03-16 11:59:10
 * @LastEditTime: 2022-03-16 13:57:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \app1\src\store\persion.js
 */
// 人员管理相关的配置
import axios from 'axios'
import { nanoid } from 'nanoid'
export default{
    namespaced:true,//开启命名空间
    actions:{
        addPerssonWang(context,value){
            if(value.name.indexOf('王') === 0){
                // 0 表示"王"位置在第一个
                context.commit('ADD_PERSON',value)
            }else{
                alert('这个不是姓王的人')
            }
        },
        addPersover(context){
            // api.uixsj.cn
            axios.get('http://localhost:3000/user').then(
                response => {
                    // console.log(response)
                    context.commit("ADD_PERSON",{id:nanoid(),name:response.data[0].name})
                },
                error => {
                    console.log(error)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations进行了ADD_PERSON掉用'),
            state.personList.unshift(value);//使用数组的添加进行数组后面的加入
        }
    },
    state:{
        personList:[
            {name:"张三",id:''}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}
