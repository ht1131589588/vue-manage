<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" :md="3" :lg="2" :xl="1">
        当日数据：
      </el-col>
      <el-col :xs="24" :sm="18" :md="21" :lg="22" :xl="11">
        12
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" :md="3" :lg="2" :xl="1">
        总数据：
      </el-col>
      <el-col :xs="24" :sm="18" :md="21" :lg="22" :xl="11">
        12
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
        ]
    }
  },
  components:{
    mainChat
  }
}
</script>
<style lang="scss" scoped>
  #mainChat{
    height: 500px;
  }
</style>


