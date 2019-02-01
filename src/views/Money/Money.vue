<template>
  <init-better-scroll>
    <Mslider :items="msliderItems"></Mslider>
    <Mada></Mada>
    <Money :items="moneyItems"></Money>
    <Madb></Madb>
    <Finace :items="finaceItmes"></Finace>
    <Madc></Madc>
    <money-footer :cname="$style.mfooter"></money-footer>
  </init-better-scroll>
</template>

<script>
import Mslider from './components/mslider'
import Mada from './components/mada'
import Madb from './components/madb'
import Madc from './components/madc'
import Money from './components/money'
import Finace from './components/finace'
import MoneyFooter from 'public/footer'
export default {
  data () {
    return {
      msliderItems: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
      }],
      moneyItems: [{
        title: '定期理财',
        sub: '理财首选',
        rate: '5.60%',
        text: '历史年化回报率'
      }, {
        title: '小白理财',
        sub: '理财首选',
        rate: '4.22%',
        text: '7日年化收益率'
      }, {
        title: '月月盈',
        sub: '养老保障',
        rate: '5%',
        text: '七日年化收益率'
      }, {
        title: '小白基金',
        sub: '天天赚钱',
        rate: '4.27%',
        text: '7日年化收益率'
      }],
      finaceItmes: [{
        title: '去赚钱 >',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
        Infor: {
          title: '月度理财',
          content: '预期年化收益率4.50%'
        }
      },
      {
        title: '去赚钱 >',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
        Infor: {
          title: '季度理财',
          content: '历史年化回报率5.50%'
        }
      },
      {
        title: '去赚钱 >',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
        Infor: {
          title: '一年理财',
          content: '历史年化回报率5.80%'
        }
      }]
    }
  },
  components: {
    Mslider,
    Mada,
    Madb,
    Money,
    Finace,
    Madc,
    MoneyFooter
  }
}
</script>
<style lang="scss" module>
  .mfooter{
    margin-top: 0!important;
    ul{
      li:first-child{
        display: none;
      }
    }
  }
</style>
