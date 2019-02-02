<template>
  <Panel :title="item.title" :class="$style.panel">
    <section :class="$style.content">
      <img v-for="(item,index) of item.children.img" :src="item" alt="" :key="`${item}${index}`"/>
      <p>{{item.children.title}}</p>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
export default {
  name: 'daily',
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
      padding-bottom: 40px;
      img{
        width: 320px;
        height: 136px;
      }
      p{
        position: absolute;
        top:-112px;
        right: 20px;
        font-size: 28px;
        color: #999;
        height: 112px;
        line-height: 112px;
      }
    }
  }
</style>
