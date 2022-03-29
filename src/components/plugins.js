export default{
    install(Vue){

        // 封装一个防抖函数
        // fn 传入要执行的业务
        // 限制执行的事件
        Vue.prototype.debouncefn = function(fn,wait) {
            let timer = null
            return function() { // 被封装后的新的业务函数
                clearTimeout(timer)
                timer = setTimeout(function(){
                    fn() // fn 是业务函数
                },wait)
            }
        },


        // 封装节流函数
        Vue.prototype.throttle=function(ff,wait){
            var timer=null;
            return function(){
                if(timer)return 
                timer=setTimeout(function(){
                    ff();
                    timer=null;
                },wait)
            }
        }
    }
}