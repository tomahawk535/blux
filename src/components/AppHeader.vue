<template>
  <header class="header">
    <div class="header__container">
      <a href="" class="header__logo"><img src="../assets/header_logo.png" alt=""></a>
      <AppNav/>
      <AppButton
          :value='loginBTN'
      />
    </div>
  </header>
</template>

<script>

import AppButton from "./AppButton.vue";
import AppNav from "./AppNav.vue";
export default {
  name: "AppHeader",
  
  components: {
    AppNav,
    AppButton
  },
  data () {
    return {
      loginBTN: 'Login',
    }
  },
}
</script>

<style scoped>
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: transparent;
}
.header__container {
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  padding: 0px 30px;
  align-items: center;
  justify-content: space-between;
  min-height: 150px;
}
.header__logo {
  position: relative;
  z-index: 5;

}
:deep(.header__menu) {
  margin-left: auto;
}

:deep(.btn) {
  margin-left: 8%;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  background-color: #2B61D1;
  color: #FFFFFF;
}
:deep(.btn:hover) {
  background-color: transparent;
}

@media (max-width: 950px) {
  :deep(.btn) {
    margin-left: 0;
  }
  :deep(.header__menu) {
    margin: 0;
  }
}
@media (max-width: 875px) {
  :deep(.btn){
    display: none;
  }
}
</style>