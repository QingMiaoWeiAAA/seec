const Mock = require('mockjs')
// console.log(Mock);
let data = [
  {
    title:"小明",
    ren:"fengme",
    lan:"456565",
    hui:"4656"
  },
  {
    title:"孙悟空",
    ren:"fengme",
    lan:"456565",
    hui:"4656"
  },
  {
    title:"猪八戒",
    ren:"fengme",
    lan:"456565",
    hui:"4656"
  },
  {
    title:"沙和尚",
    ren:"fengme",
    lan:"456565",
    hui:"4656"
  },
  {
    title:"白领",
    ren:"fengme",
    lan:"456565",
    hui:"4656"
  },
  {
    title:"牛魔王",
    ren:"fengme",
    lan:"456565",
    hui:"4656"
  },
  {
    title:"铁扇",
    ren:"fengme",
    lan:"456565",
    hui:"4656"
  }
  
]
Mock.mock('/api/person','get',function(config){
  console.log(config)
  return data
})


// 删除
Mock.mock(/\/api\/person\/\d/,"delete",function(config){
  console.log(config.url)
  let arr = config.url.split("/")
  let id = arr.pop()
  data.splice(id,1)
  data = data.map(function(item,id){
      return {
          id,
          name:item.name,
          text:item.text
      }
  })
  // data.forEach(function(item,index){
  //     item.id = index
  // })
  console.log(data)
  return data
})