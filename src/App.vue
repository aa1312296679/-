<template>
  <div id="app">
    <router-view/>
    <navbar></navbar>
  </div>
</template>
<script>
import navbar from 'public/navbar'
export default {
  components: {
    navbar
  }
}
</script>
