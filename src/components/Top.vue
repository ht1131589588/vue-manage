<template>
  <div class="main-top fillcontain">
    <div class="left">
      <a href="javascript:;" @click="toggleCollapse" class="collapse-btn"><i class="iconfont icon-zhedie"></i></a>
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
 export default {
    data() {
      return {
        isCollapse: false
      };
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
