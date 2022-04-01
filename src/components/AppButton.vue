<script>

export default {
  name: 'ButtonSection',
  components: {},
      props: {
        btn: {
          type: String,
          required: true
        }
      },
      data(){
        return {

        }
      }
} 


</script>

<template>
  <input type="button" class="btn" value="Кнопка">
</template>

<style>
.btn {
    border-radius: 60px;
    border: 2px solid #2B61D1;
    outline: none;
    appearance: none;
    padding: 16px 50px;
    transition: all 0.3s ease;
    background-color: #fff;
}
.btn:hover {
    cursor: pointer;
}


</style>