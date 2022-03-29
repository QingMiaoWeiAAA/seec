<template>
  <div>
    <el-table :data="shuju" style="width: 100%">
      <el-table-column prop="title" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="ren" label="作者" width="180"> </el-table-column>
      <el-table-column prop="lan" label="浏览量"> </el-table-column>
      <el-table-column prop="hui" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import insatnce from  "@/api/api.js"
import axios from "axios";
export default {
  name: "person",
  data() {
    return {
      shuju: [],
    };
  },
  methods:{
      async handleDelete(index, row) {
        console.log(index, row);
        await insatnce.delete('/api/insatnce',idnex)
        .then(
            res=>{
                console.log(res)
            },
            error=>{
                console.log(error)
            }
        )
      }
  },
  created() {
    axios.get("/api/person").then(
      (res) => {
        console.log(res.data);
        this.shuju = res.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style>
</style>