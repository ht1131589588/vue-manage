<template>
  <div class="explain dxy-text-center">
    <h2>一个简单的后台管理系统</h2>
    <h3>第一次登录的用户自动注册成为普通管理员</h3>
    <h3>普通管理员只能查看和操作部分功能</h3>
    <h3>超级管理员有全部操作</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '说明'
    }
  }
}
</script>
<style lang="scss" scoped>
  .explain{
    h3{margin-top:10px }
  }
</style>