let Mock = require("mockjs")
let data = [
    {id:0,name:"黄安",text:"我是黄安，我最恶心"},
    {id:1,name:"郑威",text:"我是郑威，我喜欢黄安"},
    {id:2,name:"冯广志",text:"我是冯广志，哈哈哈"},
    {id:3,name:"王泽豪","text":"我是王泽豪,我爱凤姐"},
    {id:4,name:"余杰",text:"我是余杰,我也爱凤姐"}
]

// 删除
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
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

// 更新
Mock.mock(/\/api\/homeindex\/edit\/\d/,"put",function(config){
    //  /\/api\/homeindex\/edit\/\d/  开头与结尾的斜杠相当于引号
    console.log(config)
    let arr = config.url.split("/")
    let id = arr.pop() // 获取id
    let canshu = config.body  // string
    canshu = JSON.parse(canshu) // obj
    console.log(canshu)
    data[id].name = canshu.name
    data[id].text = canshu.text
    return data
})


// 添加
Mock.mock("/api/homeindex",'post',function(config){
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    // 数据凹陷的解决方案
    data.push({id:data.length,name,text})
    return data;
})