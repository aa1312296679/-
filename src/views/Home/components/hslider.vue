<template lang="html">
    <article class="">
      <Carousel :Items="items" :cname="$style.slider"></Carousel>
        <section :class="$style.list">
            <router-link tag="div" :class="$style.item" v-for="item in enters" :key="item.img" :to="{ name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
            </router-link>
        </section>
    </article>
</template>

<script>
import Carousel from 'common/core/Carousel.vue'
export default {
  components: {
    Carousel
  },
  props: {
    items: {
      type: Array
    },
    enters: {
      type: Array
    }
  }
}
</script>

<style lang="scss" module>
  @import "~styles/element.scss";
  .slider{
    margin-top: 120px;
    img{
      width: 100%;
    }
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4{
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
