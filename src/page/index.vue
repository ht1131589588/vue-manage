<template>
  <el-container class="main-container fillcontain">
    <main-left :collapse="isCollapse"></main-left>
    <el-container>
      <el-header>
        <top></top>
      </el-header>
      <el-main>
        <header-bread></header-bread>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MainLeft from '@/components/Left'
import Top from '@/components/Top'
import headerBread from '@/components/headerBread.vue'
export default {
  data () {
    return {
      msg: 'Welcome To Your Vue.js App',
      isCollapse: false
    }
  },
  components:{
    MainLeft,
    Top,
    headerBread
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../style/mixin';
  .main-container{
    &>.main-left{
      background-color: $default-nav-bc;
      height: 100%;
    }
    &>.el-container{
      &>.el-header {
        color: #333;
        text-align: center;
        line-height: 60px;
        padding-left: 0px;
        @include bb();
      }
      &>.el-main {
        background-color: $bg_color;
        color: #333;
      }
    }
  }
  



</style>
