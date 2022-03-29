<template>
  <div id="login">
    <div class="inputs">
      <p class="logintitle">Login From</p>
      <div class="loginss">
        <p class="iconsss bigs">
          <i class="el-icon-user-solid icoss"></i>
          <input
            type="text"
            placeholder="用户名"
            class="bigs"
            value="admin"
            v-model="name"
          />
        </p>
        <p class="iconsss bigs">
          <i class="el-icon-lock icoss"></i>
          <input
            type="text"
            placeholder="密码"
            class="bigs"
            value="1111"
            v-model="id"
          />
        </p>
        <button class="bigs btn" @click="denglu">Login</button>
      </div>
      <div class="tishi">
        <p>username:admin</p>
        <p>password:any</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: null,
      id: null,
    };
  },
  methods: {
    denglu() {
      console.log("点击登录");
      const namerule = /^[a-z]\w{2,6}\w$/;
      const idrule = /^\w{2,6}$/;
      const nameitem = localStorage.getItem("name");
      const iditem = localStorage.getItem("id");
      localStorage.setItem("id", this.id);
      localStorage.setItem("name", this.name);
      
      // 验证name和id的格式问题
      if (namerule.test(this.name) && idrule.test(this.id)) {
          console.log("登录成功");
          this.$router.push({
              path:"/mymain"
          })
      } else {
        alert("登录失败");
        return 
      }
    },
  },
};
</script>

<style scoped>
#login {
  background: #2d3a4b;
  height: 100%;
  width: 100%;
}
.icoss {
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  color: #fff;
  padding: 20px 10px;
}
* {
  margin: 0;
  padding: 0;
}
.inputs {
  width: 520px;
  height: 478px;
  margin: 0 auto;
  padding: 160px 35px;
}
.logintitle {
  color: #eee;
  font-size: 26px;
  text-align: center;
  font-weight: bolder;
  margin-bottom: 40px;
}
.bigs {
  width: 100%;
  height: 52px;
  background: #454545;
  border: none;
  outline: none;
}
.loginss input {
  padding: 12px 5px 12px 15px;
  color: #fff;
  font-size: 14px;
  margin-bottom: 25px;
  border-radius: 5px;
}
.btn {
  background: #409eff;
  color: #fff;
  font-size: 15px;
}
.btn:hover {
  background: #5cadff;
  outline: none;
}
.tishi {
  display: flex;
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
}
.iconsss {
  display: flex;
  margin-bottom: 20px;
}
.tishi p:nth-child(1) {
  margin-right: 20px;
}
</style>