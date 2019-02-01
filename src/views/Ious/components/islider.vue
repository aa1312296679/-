<template>
  <Panel title="轮播图" :class="$style.panel">
    <Carousel :cname="$style.content" :Items="items">
      <template slot-scope="props">
        <router-link :to="{ name: props.item.href}">
          <img :src="props.item.src" alt="">
        </router-link>
      </template>
    </Carousel>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
import Carousel from 'common/core/Carousel'
export default {
  name: 'islider',
  props: {
    items: {
      type: Array
    }
  },
  components: {
    Panel,
    Carousel
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
    margin-top: 120px;
    .content{
      margin-top: 100px;
      img{
        width: 100%;
      }
    }
  }
</style>
