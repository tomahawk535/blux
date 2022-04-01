<template>
  <div class="hero__container _container">
    <div class="hero__text">
      <TextSection
          title="The World’s Fastest Growing Crypto App"
          description="'Enjoy up to 8% back on all spending with your sleek, pure metal card.' +
      ' No annual fees. Top-up with fiat or crypto." />
      <ButtonSection
          :value="value" />
    </div>
    <div class="hero__image">
      <img src="../assets/Crypto-home.png" alt="hero_img" class="img">
    </div>
  </div>
</template>

<script>
import TextSection from './TextSection.vue'
import ButtonSection from './AppButton.vue'

export default {
  name: "HeroSection",
  components: {
    TextSection,
    ButtonSection,

  },
  // .props: {
  //
  // }
  data() {
    return {
      value: "Learn More",


    }
  }
}
</script>

<style scoped>
._container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}
.hero__container {
  display: flex;

}
.hero__text {
  width: 50%;
  padding-right: 50px;
}
.hero__image {
  width: 50%;
  display: flex;
}
.img {
  margin-left: auto;
  width: auto;
}
.btn {
  /*background-color: transparent;*/
  color: #fff;
  margin-top: 40px;
  background-color: transparent;
}
.btn:hover {
  background-color: #2B61D1;
}

@media (max-width: 1025px) {
  .hero__container {
    flex-wrap: wrap;
    flex-direction: column;
    /*padding: 0 167px;*/
    align-items: center;
  }
  .hero__text{
    width: 100%;
    max-width: 500px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    background-image: url("../assets/Crypto-home.png");
    /*opacity: 0.5;*/
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 0;
    position: relative;
    /*background-color: rgba(255, 255, 255, 0.3);*/
  }
  .hero__text::before {
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
  .hero__image {
    display: none;
  }
  /*.text__title {*/
  /*  font-size: 35px;*/
  /*}*/


}

</style>