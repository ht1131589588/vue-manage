<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" class="text-center">
        当日数据：
      </el-col>
      <el-col :xs="24" :sm="16" >
        <div class="today-data">
          <span>
            22
          </span>
          <span>
            22
          </span>
          <span>
            22
          </span>
          <span>
            22
          </span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" class="text-center">
        总数据：
      </el-col>
      <el-col :xs="24" :sm="16">
        <div class="today-data">
          <span>
            22
          </span>
          <span>
            22
          </span>
          <span>
            22
          </span>
          <span>
            22
          </span>
        </div>
      </el-col>
    </el-row>
    
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <main-chat :x-datas="chatDatas"></main-chat>
      </el-col>
    </el-row>
  </div>
  
</template>

<script>
import mainChat from '@/components/chart'

export default {
  data () {
    return {
      msg: '主页',
      chatDatas:[
          [321, 132, 101, 555, 90, 230, 210],
          [220, 182, 191, 234, 290, 330, 310],
          [820, 932, 901, 400, 1290, 1320, 1320]
        ],
      
    }
  },
  components:{
    mainChat
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  #mainChat{
    height: 500px;
  }
  .today-data{
    display: flex;
    height: 40px;
    line-height: 40px;
    span{
      flex: 1;
      text-align: center;
      
    }
  }
</style>


