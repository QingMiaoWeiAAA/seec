const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //这是样式的修改
  devServer:{
    proxy:{
      "/api":{
        target:"http://127.0.0.1:3000/",
        changeOrigin:true,
        pathRewrite:{
          "/api":""
        }
      }
    }
  }
});
