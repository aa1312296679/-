<template>
    <init-better-scroll>
      <Rislider :itmes="risliderItmes"></Rislider>
      <Daily :item="dailyItem"></Daily>
      <In :items="inItems"></In>
      <More :item="moreItem"></More>
      <RiseFooter :cname="$style.mfooter"></RiseFooter>
    </init-better-scroll>
</template>

<script>
import Rislider from './components/rislider'
import Daily from './components/daily'
import In from './components/in'
import More from './components/more'
import RiseFooter from 'common/public/footer'
export default {
  data () {
    return {
      risliderItmes: ['百万白条券免费送，速来领取！！', '签到领流量，1元500M！'],
      dailyItem: {
        title: '每日签到',
        children: { title: '不抢白不抢',
          img: ['//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160',
            '//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160'
          ] }
      },
      inItems: [{
        catory: '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
        list: [{
          img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
          title: '双响炮蓝牙音箱',
          price: '29.00',
          progress: 172
        }, {
          img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
          title: '脑波相机',
          price: '998.00',
          progress: 259
        }]
      }, {
        catory: '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
        list: [{
          img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
          title: '智能电动牙刷',
          price: '19.00',
          progress: 481
        }, {
          img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
          title: '烟草加热电子烟',
          price: '258.00',
          progress: 105
        }]
      }, {
        catory: '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
        list: [{
          img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
          title: '赖公高淮封藏老酒',
          price: '99.00',
          progress: 199
        }, {
          img: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
          title: '泗洪花雕醉蟹',
          price: '58.00',
          progress: 222
        }]
      }],
      moreItem: {
        title: '更多福利',
        children: {
          title: '专享福利 >',
          imgs: ['//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330',
            '//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330',
            '//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330'
          ]
        }
      }
    }
  },
  components: {
    Rislider,
    Daily,
    In,
    More,
    RiseFooter
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
