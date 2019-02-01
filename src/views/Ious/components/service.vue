<template>
  <Panel title="更多服务" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="(item,index) in items" :key="`${index}${item.img}`">
        <img :src="item.img" alt="">
        <p>{{ item.text }}</p>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
export default {
  components: {
    Panel
  },
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="scss" module>
  @import "~styles/element.scss";
  .panel{
    @include panel;
    .content{
      @include flex(row);
      .item{
        width: 160px;
        height: 144px;
        text-align: center;
        margin-bottom: 40px;
        img{
          width: 90px;
          height: 90px;
        }
        p{
          font-size: 26px;
          color: #666px;
          margin-top: 12px;
        }
      }
    }
  }
</style>
