<template>
  <Panel :title="item.title" :class="$style.panel">
    <section :class="$style.content">
      <img v-for="(item,index) of item.children.imgs" :key="`${item}${index}`" :src="item" alt="">
      <span>{{item.children.title}}</span>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
export default {
  name: 'more',
  components: {
    Panel
  },
  props: {
    item: Object
  }
}
</script>

<style lang="scss" module>
  @import "~styles/element.scss";
  .panel{
    @include panel;
    .content{
      @include flex(row);
      position: relative;
      justify-content: space-around;
      padding-bottom: 60px;
      img{
        width: 33.333333%;
        height: 280px;
      }
      span{
        position: absolute;
        right: 20px;
        top: -112px;
        font-size: 28px;
        color: #999;
        height: 112px;
        line-height: 112px;
      }
    }
  }
</style>
