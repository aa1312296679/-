<template>
  <panel title="新品推荐" :class="$style.panel">
    <section :class="$style.content">
      <div class="arrow">更多尖货 ></div>
      <Carousel :options="options" :Items="proItems" cname="productCarosel">
        <template slot-scope="props">
          <router-link :to="{ name: props.item.href}">
            <img :src="props.item.src" alt="">
          </router-link>
        </template>
      </Carousel>
    </section>
  </panel>
</template>

<script>
import Panel from 'common/core/panel.vue'
import Carousel from 'common/core/Carousel.vue'
export default {
  name: 'product',
  components: {
    Panel,
    Carousel
  },
  data () {
    return {
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
      }
    }
  },
  props: {
    proItems: Array
  }
}
</script>
<style lang="scss">
  .productCarosel{
     .swiper-container{
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide{
        a{
          display: inline-block;
          width: 100%;
          img{
            width: 100%;
            display: block;
            height: 314px;
            border: 1px solid #fafafa;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import "~styles/element.scss";
  .panel{
    @include panel;
    .content{
      padding-bottom: 40px;
      position: relative;
      &>div{
        position: absolute;
        font-size: 28px;
        color: #999;
        right:20px;
        top: -70px;
      }
    }
  }
</style>
