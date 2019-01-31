<template>
    <div>
      <hislider :items="hisliderItems" :enters="hisliderEnters"></hislider>
      <novice :items="noviceItems"></novice>
      <borrow></borrow>
      <money :items="moneyItmes"></money>
      <product :proItems="proItems"></product>
      <life :items="liefeItems"></life>
      <home-footer></home-footer>
    </div>
</template>

<script>

import Hislider from './components/hslider'
import Novice from './components/novice'
import Borrow from './components/borrow'
import Money from './components/money'
import Product from './components/product'
import Life from './components/life'
import HomeFooter from 'public/footer'

export default {
  components: {
    Borrow,
    Hislider,
    Novice,
    Money,
    Product,
    Life,
    HomeFooter
  },
  data () {
    return {
      hisliderItems: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t16138/325/817844900/36681/5d874455/5a422029Ncd678ea3.jpg?width=750&height=320'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320'
      }],
      hisliderEnters: [{
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
        title: '优惠券'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
        title: '领红包'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
        title: '抢钢镚'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
        title: '领京豆'
      }, {
        href: 'home',
        img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
        title: '白条提额'
      }],
      noviceItems: [
        { title: '领128元新手礼包',
          content: '立即开通',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200'
        },
        { title: '打白条享免息',
          content: '立即开通享豪礼',
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100'
        }
      ],
      moneyItmes: [{
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
      proItems: [{
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421'
      }, {
        href: 'home',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421'
      }],
      liefeItems: [{
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135',
        children: ['惠加油']
      },
      {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132',
        children: ['小白信用', '全新升级']
      },
      {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135',
        children: ['信用卡还款']
      },
      {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135',
        children: ['卡转让']
      },
      {
        src: '//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135',
        children: ['定期还款']
      }]
    }
  }
}
</script>
