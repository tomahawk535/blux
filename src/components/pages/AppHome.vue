<template>
  <HeroSection/>
  <LaunchSection/>
  <FluxSection/>
</template>

<script>
import ButtonSection from '../AppButton.vue';
import HeroSection from "../HeroSection.vue";
import LaunchSection from "../LaunchSection.vue";
import FluxSection from "../FluxSection.vue";
// import AppHeader from "../AppHeader.vue";


export default {
  name: "AppHome",

  components:{
    ButtonSection,
    HeroSection,
    LaunchSection,
    FluxSection,
  }
}
</script>

<style scoped>

</style>