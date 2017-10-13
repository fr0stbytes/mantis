<template>
  <div id="app">
    <navbar></navbar>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
// Import Main styles for this application
@import "./scss/style";
</style>
