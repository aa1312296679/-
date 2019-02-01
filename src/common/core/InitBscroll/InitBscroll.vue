<template>
  <div :class="$style.list" ref="wrapper">
    <ul v-if="items.length==0" :class="$style.listContent">
      <li :class="$style.area">
        <slot></slot>
      </li>
    </ul>
    <ul v-else :class="$style.listContent">
      <li :class="$style.area" v-for="(item,index) of items" :key="index">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
// 导入better-scroll滚动插件
import Bscroll from 'better-scroll'
export default {
  props: {
    // 数据信息
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" module>
  @import "~styles/betterScroll.scss";
  @include better;
</style>
