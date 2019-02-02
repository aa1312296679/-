<template>
  <Panel title="In货推荐" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="(item,index) in items" :key="`${item.catory}${index}`">
        <img :src="item.catory" alt="">
        <section :class="$style.list">
          <div :class="$style.product" v-for="(item,index) in item.list" :key="`${item.img}${index}`">
            <img :src="item.img" alt="">
            <p :class="$style.title">{{ item.title }}</p>
            <p :class="$style.price"><em>{{ item.price }}</em>起</p>
            <article>
              <div :class="$style.wrapper">
                <div :class="$style.inner" :style="{width:item.progress+'%'}"/>
              </div>
              <p>{{ item.progress }}%</p>
            </article>
            <label>精选</label>
          </div>
        </section>
      </div>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel.vue'
export default {
  name: 'in',
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
    .content{
      @include flex;
      .item{
        >img{
          display: block;
          width: 100%;
          height: 170px;
        }
        margin-bottom: 40px;
        .list{
          @include flex(row);
          .product{
            width:50%;
            height: 396px;
            box-sizing: border-box;
            background: rgba(0,0,0,.02);
            text-align: center;
            position: relative;
            img{
              width: 180px;
              height: 180px;
              margin: 44px auto 20px;
            }
            .title{
              font-family: PingFangSC-Medium;
              font-size: 28px;
              color: #444;
            }
            .price{
              font-family: PingFangSC-Semibold;
              font-size: 20px;
              color: #999;
              height: 48px;
              line-height: 48px;
              em{
                font-size: 36px;
                color: #FF3232;
                margin-right: 4px;
                &:before{
                  content: "￥";
                  font-size: 28px;
                }
              }
            }
            article{
              @include flex(row);
              align-items: center;
              justify-content: space-around;
              padding: 0 20px;
              height: 30px;
              line-height: 30px;
              margin-top: 16px;
              .wrapper{
                width: 144px;
                height: 10px;
                background: #F6E6E6;
                border-radius: 22px;
                .inner{
                  width: 40%;
                  max-width: 100%;
                  height: 10px;
                  background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
                  border-radius: 22px;
                }
              }
              p{
                font-size: 24px;
                color: #999;
              }
            }
            label{
              position: absolute;
              left: 0;
              top: 0;
              font-family: PingFangSC-Medium;
              font-size: 20px;
              color: #ff0000;
              text-align: center;
              padding: 4px 8px;
              background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);
            }
          }
        }
      }
    }
  }
</style>
