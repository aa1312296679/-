<template>
  <Panel title="白条福利" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="(item,index) of items" :key="`${item.title}${index}`">
        <img :src="item.src" alt="">
        <div v-for="(item,index) of item.children" :key="`${item.title}${index}`">
          <h4>{{item.title}}</h4>
          <p>{{item.content}}</p>
        </div>
        <em>{{item.title}}</em>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
export default {
  name: 'welfare',
  props: {
    items: {
      type: Array
    }
  },
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import "~styles/element.scss";
.panel{
  @include panel;
  >h4{
    border-bottom: 1px solid #ddd;
  }
  .content{
    @include flex;
    .item{
      @include flex(row);
      align-items: center;
      height: 140px;
      &:after{
        content: " ";
        box-sizing: border-box;
        height: 0;
        width: 100%;
        border-bottom: 1px solid #ddd;
        margin-left: 150px;
      }
      &:last-child:after{
        border-color: #fff;
      }
      >img{
        width: 88px;
        height: 88px;
        display: inline-block;
        margin: 0 32px;
      }
      >div{
        font-size: 32px;
        color: #333;
        line-height: 1.8;
        width: 304px;
        p{
          color: #999;
          font-size: 24px;
          line-height: 1.1;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      >em{
        color: #FF801A;
        font-size: 28px;
      }
    }
  }
}
</style>
