<template>
  <div class="account-login">
    <div class="login-box">
      <h3 class="login-box-title">登录</h3>
      <div class="login-box-form">
        <div class="common-mt-15">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </div>
        <div class="common-mt-15">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </div>
        <div class="common-mt-15">
          <el-button type="primary" class="login-submit-btn" @click="submitForm">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {login} from '@/api/data'
  import {mapActions, mapState} from 'vuex'

  export default {
    data() {
      return {
        loginForm:{
          username:'',
          password:''
        }
      };
    },
    mounted(){
      
    },
    methods: {
      async submitForm() {
        console.log(this.loginForm);
        const res = await login({user_name: this.loginForm.username, password: this.loginForm.password})
      }
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
      width: 320px;
      height: auto;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(222,222,222,.3);
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 16px 16px 30px;
      box-sizing: border-box;
    }
    .login-box-title{
      line-height: 40px;
      text-align: center;
    }
    .login-box-form{
      margin-top: 15px;
    }
    .login-submit-btn{
      width: 100%;
    }
  }
</style>
