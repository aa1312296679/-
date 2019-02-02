<template>
  <Panel title="金融头条" :class="$style.panel">
    <section :class="$style.content">
      <Carousel :Items="itmes" :options="options">
        <template slot-scope="props">
          {{props.item}} <em>></em>
        </template>
      </Carousel>
    </section>
  </Panel>
</template>

<script>
import Panel from 'common/core/panel'
import Carousel from 'common/core/Carousel'
export default {
  name: 'rislider',
  components: {
    Panel,
    Carousel
  },
  data () {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: 'vertical'
      }
    }
  },
  props: {
    itmes: Array
  }
}
</script>

<style lang="scss">
  .swiper-container-vertical{
    height: 72px;
    .swiper-slide{
      font-family: PingFangSC-Medium;
      font-size: 28px;
      color: #333;
      em{
        color: #ddd;
        float: right;
        margin-right: 20px;
      }
    }
  }
</style>

<style lang="scss" module>
  @import "~styles/element.scss";
  .panel{
    @include panel;
    >h4{
      display: none;
    }
    margin-top: 120px!important;
    .content{
      height: 72px;
      line-height: 72px;
      overflow: hidden;
      padding-left: 178px;
      background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left top no-repeat;
    }
  }
</style>
