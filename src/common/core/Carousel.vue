<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="(item,index) in Items" :key="`${index}`">
        <!--
          作用域插槽存储当前轮播模块的轮播信息
        -->
        <slot :item="item"></slot>
      </swiper-slide>
      <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/>
    </swiper>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Carousel',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    // section元素的类样式的类名
    cname: {
      type: String,
      default: ''
    },
    Items: {
      type: Array,
      default () {
        return []
      }
    },
    options: {
      type: Object,
      default () {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          // 当前swiper对象的初始化机制
          // true为swiper对象的父组件渲染完成后创建swiper对象
          // false为swiper对象的父组件创建完成后即在父组件的渲染过程中创建swiper对象
          notNextTick: false
        }
      }
    }
  }
}
</script>

<style lang="css" scoped>
  @import "~@/../node_modules/swiper/dist/css/swiper.css";
</style>
