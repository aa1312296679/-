<template>
    <div>
      <Rislider :itmes="risliderItmes"></Rislider>
    </div>
</template>

<script>
import Rislider from './components/rislider'
export default {
  data () {
    return {
      risliderItmes: ['百万白条券免费送，速来领取！！', '签到领流量，1元500M！']
    }
  },
  components: {
    Rislider
  }
}
</script>
