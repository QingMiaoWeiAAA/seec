<template>
  <div class="Main">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1" class="titles">
            <template slot="title">
              <span>ElementUI管理后台</span>
            </template>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <router-link to="/mymain/shouye"><span>首页</span></router-link>
            </template>
          </el-submenu>
           <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-2"><i class="el-icon-s-help"></i><router-link to="/mymain/wenzhang">文章列表</router-link></el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="3-3"><i class="el-icon-s-help"></i>多级路由展示</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
         <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "mymain",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.Main {
  height: 100vh;
  width: 100%;
}
.el-container,
.el-aside {
  height: 100vh;
  width: 100%;
}
.el-col {
  height: 100vh;
  background: #222d32;
  width: 20%;
}
.el-menu-item-group,
.el-menu-item {
  background: #222d32 !important;
}
.el-header{
  background:#0086f1;
}

</style>