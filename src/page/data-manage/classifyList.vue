<template>
  <div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%;">
        <el-table-column
          type="index"
          width="auto">
        </el-table-column>
        <el-table-column
          prop="id"
          label="ID"
          width="auto">
        </el-table-column>
        <el-table-column
          label="标签名"
          width="auto">
          <template slot-scope="scope">
            <el-tag type="success">{{scope.row.name}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="添加日期">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="auto">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tableData: [{
          id: '101',
          name: '前端',
          date: '2017-11-8'
        }, {
          id: '102',
          name: 'java',
          date: '2017-11-8'
        }, {
          id: '103',
          name: 'node',
          date: '2017-11-8'
        },{
          id: '104',
          name: 'vue',
          date: '2017-11-8'
        }]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  components:{
  }
}
</script>
<style lang="scss" scoped>
  
</style>