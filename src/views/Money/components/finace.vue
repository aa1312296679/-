<template>
  <Panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="(item,key) of items" :key="key">
        <img :src="item.src" alt="">
        <div>
          <h4>{{item.Infor.title}}</h4>
          <p>{{item.Infor.content}}</p>
        </div>
        <em>{{item.title}} </em>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
export default {
  name: 'finace',
  components: {
    Panel
  },
  props: {
    items: Array
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
          width: 344px;
          p{
            color: #ff3232;
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
