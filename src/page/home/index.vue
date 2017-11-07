<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24">
        <dl class="dxy-dl dxy-dl-horizon">
          <dt>当日数据：</dt>
          <dd>
            <ul class="dxy-ul dxy-ul-horizon data-line">
              <li><span>新增用户</span></li>
              <li><span>新增管理员</span></li>
              <li><span>新增文章</span></li>
            </ul>
          </dd>
          <dt>总数据：</dt>
          <dd>
            <ul class="dxy-ul dxy-ul-horizon  data-line">
              <li><span>用户</span></li>
              <li><span>管理员</span></li>
              <li><span>文章</span></li>
            </ul>
          </dd>
        </dl>
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
import mainChat from '@/components/chart';
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
  .data-line{
    display: flex;
    height: 40px;
    line-height: 40px;
    width:500px;
    margin-bottom: 10px;
    li{
      flex: 1;
      text-align: center;
      box-sizing: border-box;
      padding: 0px 10px;
      span{
        display: block;
        height: 100%;
        border-radius: 4px;
        background: #ddd
      }
    }
  }
</style>


