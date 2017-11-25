<template>
  <div class="account-login">
    <div class="login-box">
      <h3 class="login-box-title">登录</h3>
      <div class="login-box-form">
        <div class="common-mt-15">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </div>
        <div class="common-mt-15">
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
        </div>
        <div class="common-mt-15">
          <el-button type="button">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import fetch from '@/config/fetch'
  export default {
    data() {
      return {
        username:'',
        password:''
      };
    },
    mounted(){
     
    },
    methods: {
      
    }
  }
</script>
<style type="text/sass" lang="scss" scoped>
  .account-login{
    height: 100%;
    width: 100%;
    background: #add1c5;
    overflow: hidden;
    position: relative;
    .login-box{
      position: absolute;
      width: 320px;height: 400px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(222,222,222,.3);
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 16px;
      box-sizing: border-box;
    }
    .login-box-title{
      line-height: 40px;
      text-align: center;
    }
    .login-box-form{
      margin-top: 15px;
    }
  }
</style>
