<template>
  <div>
    <div class="right">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="formInline.title" placeholder="文章标题"></el-input>
        </el-form-item>
        <el-form-item label="标签名">
          <el-select v-model="formInline.classify" placeholder="标签">
            <el-option label="前端" value="qianduan"></el-option>
            <el-option label="Java" value="java"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
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
          prop="title"
          label="标题"
          width="auto">
        </el-table-column>
        <el-table-column
          label="作者"
          width="auto">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.author.name }}</p>
              <p>住址: {{ scope.row.author.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.author.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="标签"
          width="auto">
          <template slot-scope="scope">
            <el-tag type="success" v-for="item in scope.row.classify">{{item}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布日期">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="auto">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
        id: '10001',
        title: 'vue双向数据绑定原理',
        author:{
          name:'张大仙',
          address:'天上人间'
        },
        classify:['前端','vue.js','node'],
        date: '2017-11-8'
      }, {
        id: '10002',
        title: 'vue组件封装',
        author:{
          name:'张小仙',
          address:'武汉魔山'
        },
        classify:['前端','vue.js','node'],
        date: '2017-11-8'
      }, {
        id: '10003',
        title: '前端攻城狮，我们来聊一聊',
        author:{
          name:'一片云彩',
          address:'重庆歌乐山'
        },
        classify:['前端','vue.js','node'],
        date: '2017-11-8'
      }, {
        id: '10004',
        title: '前段性能优化',
        author:{
          name:'王者小浪浪',
          address:'王者峡谷'
        },
        classify:['前端','vue.js','node'],
        date: '2017-11-8'
      }],
      formInline: {
        title: '',
        classify: ''
      }
    }
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    onSubmit() {
      console.log('submit!');
    }
  },
  components:{
  }
}
</script>
<style lang="scss" scoped>
  
</style>