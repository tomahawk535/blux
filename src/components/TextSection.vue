<script>

export default {
      name: 'TextSection',

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }
}
    // defineProps({
    //     title: {
    //         type: String,
    //          required: true
    //     },
    //     description: {
    //         type: String,
    //          required: true
    //     },
    // })

    
</script>

<template>
    <div class="text__container">
        <h2 class="text__title">{{ title }}</h2>
        <p class="text__description">{{ description }}</p>
    </div>
</template>

<style>
    .text__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
        .text__title {
            font-weight: 700;
            font-size: 48px;
            line-height: 58px;
            color: #fff;
            margin: 99px 0 16px;
        }
        .text__description {
            color: rgba(255, 255, 255, 0.5);
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
        }


    @media (max-width: 1025px) {
      .text__container {
        text-align: center;
      }
      .text__title {
        margin: 50px 0 16px;
      }
    }
</style>