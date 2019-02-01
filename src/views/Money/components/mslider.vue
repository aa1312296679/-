<template>
  <Panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <Carousel :Items="items" :cname="$style.slider">
        <template slot-scope="props">
          <router-link :to="{ name: props.item.href}">
            <img :src="props.item.src" alt="">
          </router-link>
        </template>
      </Carousel>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
import Carousel from 'common/core/Carousel'
export default {
  name: 'mslider',
  components: {
    Panel,
    Carousel
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
    >h4{
      display: none;
    }
    .content{
      .slider{
        margin-top: 120px;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
