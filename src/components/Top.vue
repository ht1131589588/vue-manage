<template>
  <div class="main-top fillcontain">
    <div class="left">
      <a href="javascript:;" @click="toggleCollapse" class="collapse-btn"><i class="iconfont icon-zhedie"></i></a>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          小菜一碟<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  import fetch from '@/config/fetch'
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    mounted(){
      console.log(fetch)
      // fetch('/signin',{
      //   email:'admin@example.com',
      //   password:'123456'
      // },"POST").then(function(res){
      //   console.log(res);
      // })
      fetch('/').then(function(res){
        console.log(res);
      })
    },
    methods: {
      toggleCollapse() {
        this.$root.$emit('navToggleCollapse');
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style type="text/sass" lang="scss">
  @import '../style/mixin';
  .collapse-btn{
    display: block;
    width: 60px;
    height: 60px;
    @include br();
    color: $font_color;
    .iconfont{
      font-size: 20px;
    }
  }
</style>
