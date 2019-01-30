<template>
  <section :class="[panelClass,cname]">
    <h4>-&nbsp;{{ title }}&nbsp;-</h4>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'panel',
  props: {
    cname: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~styles/element.scss';
  .panel{
    @include panel;
  }
  .panel h4{
    font-weight: bold;
  }
</style>
