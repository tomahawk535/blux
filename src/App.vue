<script>

import AppHeader from "./components/AppHeader.vue";
// import HeroSection from "./components/HeroSection.vue";
// import LaunchSection from "./components/LaunchSection.vue";
// import FluxSection from "./components/FluxSection.vue";

export default {

  components: {
    AppHeader,
  },
}
</script>

<template>
  <AppHeader/>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import './assets/base.css';
@import './assets/null.css';

body {
  background-color: #020015;
}
body._lock {
  overflow: hidden;
}
main {
  padding-top: 150px;
}



</style>
