<template>
  <div id="shouye">
    <div class="top">
      <p class="shou">首页</p>
    </div>
    <div class="banner">
      <p class="banner-title">概况</p>
      <div class="banner-main">
        <div class="banner-item">
          <i class="el-icon-edit icons"></i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          earum enim fugiat illum iusto minus modi nam natus nisi sequi!
        </div>
         <div class="banner-item" style="background:#0079d9;color:#fff;">
          <i class="el-icon-share icons"></i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          earum enim fugiat illum iusto minus modi nam natus nisi sequi!
        </div>
         <div class="banner-item" style="background:rgb(0, 150, 136);color:#fff;">
          <i class="el-icon-delete icons"></i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          earum enim fugiat illum iusto minus modi nam natus nisi sequi!
        </div>
         <div class="banner-item" style="background:rgb(96, 125, 139);color:#fff;">
          <i class="el-icon-s-goods icons"></i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          earum enim fugiat illum iusto minus modi nam natus nisi sequi!
        </div>
      </div>
    </div>
    <div class="main">
      <p class="banner-title">ElementUI组件</p>
      <div class="main-zhan">
        <div class="demo-input-suffix">
          <el-input
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
            v-model="input1"
          >
          </el-input>
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2"
          >
          </el-input>
        </div>
        <div>
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </div>
        <div class="block">
          <span class="demonstration">带快捷选项</span>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
        <div class="block">
          <el-rate v-model="value1"></el-rate>
        </div>
        <div class="block">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
        <div>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </div>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" plain>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
        </el-row>

        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
      </div>
    </div>
    <div class="bottom">
        Copyright © 2019 公司名教育科技（北京）有限公司 . All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "shouye",
};
</script>

<style scoped>
#shouye{
    background:rgb(243, 243, 243);
}
.top {
  height: 38px;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
}
.banner-title{
    margin-bottom:10px;
    line-height:20px;

}
.shou{
    height:38px;
    background:#fff;
}
.banner {
  height: 210px;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  box-sizing: border-box;
  padding:0 10px;
  
}
.banner-main{
    display: flex;
    justify-content: space-around;
}
.main {
  height: 477px;
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  box-sizing: border-box;
  padding:0 10px;
}
.bottom {
  height: 38px;
  width: 100%;
  background: #fff;
  margin-top:20px;
  background:#fff;
  line-height:38px;
  font-weight:bolder;
  font-size:15px;
}
.main-zhan{
    height:450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.banner-item{
    width:272px;
    height:155px;
    background:skyblue;
    border-radius:5px;
    overflow: hidden;
}
.icons{
    width:83px;
    height:83px;
    font-size:80px;
}
</style>