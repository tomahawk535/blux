<template>
  <div class="launch__container _container">
    <div class="image__section">
      <img src="../assets/Launch-img.png"
           alt="launch img"
           class="launch__img">
    </div>
    <div class="launch__text">
      <TextSection
          :title="title"
          :description="description"/>
      <ButtonSection
          :value="btn_value"/>
    </div>
  </div>

</template>

<script>
import ButtonSection from './AppButton.vue';
import TextSection from "./TextSection.vue";
export default {
  name: "LaunchSection",

  components: {
    ButtonSection,
    TextSection,
  },
  data() {
    return {
      btn_value: 'Launch your app',
      title: 'Want to run a dapp on Flux network?',
      description: 'Any hardened dockerized application can run on Flux’s fully decentralized computational network'
    }
  }
}
</script>

<style scoped>
._container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}

.launch__container {
  padding-top: 100px;
  display: flex;
}
.launch__text {
  width: 50%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.image__section {
  width: 50%;
  display: flex;
  padding-right: 10%;
}
.launch__img {
  margin-right: auto;
  width: 100%;
}
.btn {
  background-color: transparent;
  color: #fff;
  margin-top: 40px;
}
.btn:hover {
  background-color: #2B61D1;
}


@media (max-width: 1025px) {
  .launch__container {
    flex-wrap: wrap;
    flex-direction: column;
    /*padding: 0 167px;*/
    align-items: center;
  }
  .launch__text{
    width: 100%;
    max-width: 500px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    background-image: url("../assets/Launch-img.png");
    /*opacity: 0.5;*/
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 0;
    position: relative;
    /*background-color: rgba(255, 255, 255, 0.3);*/
  }
  .launch__text::before {
    position: absolute;
    content: ' ';
    /*z-index: 1;*/
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #020015;
    opacity: 0.6;
  }
  .image__section {
    display: none;
  }
  .btn {
    margin: 32px auto 0;
  }



}

</style>