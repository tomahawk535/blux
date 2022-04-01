<template>
  <div class="flux__container">
   <div class="_container">
     <TextSection
         title="Leveraging the Power of Multiple Blockchains"
         description="Innovation and expansion are key factors in the Flux network. The proposed new economic model comes with a strong approach to DeFi and Web 3.0."
     />
     <div class="flux__img">
       <AppImg
           v-for="img in imgList"
           :key="img.id"
           :title="img.title"
           :description="img.description"
           :id=" img.id"
           :url="img.url"
       />
     </div>
   </div>
  </div>
</template>

<script>
import TextSection from "./TextSection.vue";
import AppImg from "./AppImg.vue";

export default {
  name: "FluxSection",

  components: {
    TextSection,
    AppImg
  },
  data() {
    return{
      imgList: [
        {
          id: 'kedana',
          url: 'src/assets/kedana.png',
          title: 'kedana',
          description: 'flux-kda'
        },
        {
          id: 'ethereum',
          url: 'src/assets/ethereum.png',
          title: 'ethereum',
          description: 'flux-eth'
        },
        {
          id: 'binance',
          url: 'src/assets/binance.png',
          title: 'binance',
          description: 'flux-bsc'
        }
      ]
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

.flux__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0 134px;
  background-color: #FFF;
  margin-top: 90px;
}

:deep(.text__container ){
  width: 80%;
  text-align: center;
  margin: 0 auto;
}
:deep(.text__title) {
  color: #020015;
}
:deep(.text__description) {
  color: rgba(0, 0, 0, 0.5);

}
.flux__img {
  display: flex;
  padding: 120px 0;
  justify-content: space-around;
}
:deep(.image__list:first-child>.img__title) {
  color: #ED098F;
}
:deep(.image__list:nth-child(2)>.img__title) {
  color: #343434;
}
:deep(.image__list:last-child>.img__title) {
  color: #F3BA2F;
}

@media (max-width: 767px) {
  .flux__img {
    flex-direction: column;
    align-items: center;
    padding: 59px 0;
  }

  :deep(.image__list) {
    width: 70%;
    margin-top: 50px;
    max-width: 766px
  }
  :deep(.image__list:first-child) {
    margin-top: 50px;

  }
}
</style>