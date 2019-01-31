<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <navbar></navbar>
  </div>
</template>
<script>
import Header from 'public/header'
import navbar from 'public/navbar'
export default {
  components: {
    navbar,
    Header
  }
}
</script>
