import Vue from "vue";
import App from "./App.vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import debouncefn from "@/components/plugins.js"

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(debouncefn);//引入防抖函数的自定插件
// 拦截ajax
if(process.env.NODE_ENV==='development'){
  require("./mock")
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
