<template>
  <div :class="[btnClass,cname]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    // 按钮的类名
    cname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 按钮所要使用的类样式
      btnClass: 'btn'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/element.scss";
  .btn {
    @include btn;
  }
</style>
