import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 解决vue路由重复导航的错误
// 获取原型对象上的push函数
const originalPush=VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push=function(location){
  return originalPush.call(this,location).catch(err=>err)
}


const routes = [
  {
    path: "/",
    name: "mylogin",
    component:() =>import("../pages/MyLogin.vue"),
  },
  {
    path:"/mymain",
    name:"mymain",
    component:()  => import("../pages/MyMain.vue"),
    children:[
      {
        path:"shouye",
        name:"shouye",
        component:() =>import("../pages/ShouYe.vue") 
      },
      {
        path:"wenzhang",
        name:"wenzhang",
        component:()=>import("../pages/Person.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
