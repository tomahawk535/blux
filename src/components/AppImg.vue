<template>
  <div class="image__list">
    <div class="list__img">
      <img :src="url" alt="{{id}}">
    </div>
    <h3 class="img__title">{{title}}</h3>
    <p class="img__description">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: "AppImg",

  props:
     [
       'title', 'url', 'id', 'description'
    ]
}
</script>

<style scoped>
.image__list {
  padding: 22px 0;
  max-width: 320px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 30px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
}
.img__title, .img__description {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 5px;
  text-transform: uppercase;
}
</style>