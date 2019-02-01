<template>
    <InitBetterScroll>
      <Islider :items="isliderItems"></Islider>
      <Welfare :items="welfareItems"></Welfare>
      <Service :items="serviceItems"></Service>
      <ious-footer></ious-footer>
    </InitBetterScroll>
</template>

<script>
import Islider from './components/islider'
import Welfare from './components/welfare'
import Service from './components/service'
import IousFooter from 'public/footer'
export default {
  data () {
    return {
      isliderItems: [{
        href: 'ious',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
      }],
      welfareItems: [{ title: '立即开通 >',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
        children: [{ title: '开通白条', content: '送188元礼包' }]
      },
      { title: '随机立减 >',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
        children: [{ title: '白条闪付', content: '新手享158元礼包' }]
      },
      { title: '去提额 >',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
        children: [{ title: '白条提额', content: '金融app专享提额礼包' }]
      }],
      serviceItems: [{
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135',
        text: '小白卡'
      }, {
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135',
        text: '白条商城'
      }, {
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135',
        text: '消费分期'
      }, {
        img: '//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120',
        text: '借钱'
      }, {
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        text: '白条提额'
      }, {
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135',
        text: '白条闪付'
      }, {
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135',
        text: '小白会玩'
      }, {
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135',
        text: '钢镚'
      }]
    }
  },
  components: {
    Islider,
    Welfare,
    Service,
    IousFooter
  }
}
</script>
