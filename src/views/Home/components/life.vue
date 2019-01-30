<template>
  <Panel title="生活服务" :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.item" v-for="(item,index) of items" :key="`${item.src}${index}`">
        <img :src="item.src" alt="">
        <p v-for="(item,index) of item.children" :key="`${item}${index}`">{{item}}</p>
      </li>
    </ul>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel.vue'
export default {
  name: 'life',
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
    box-sizing: border-box;
    padding-bottom: 40px;
    .item{
      width: 20%;
      text-align: center;
      img{
        width: 90px;
        height: 90px;
      }
      p{
        font-size: 26px;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 12px;
        &:nth-child(3){
          color: #FF801A;
        }
      }
    }
  }
}
</style>
