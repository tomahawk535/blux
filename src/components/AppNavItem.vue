<template>
  <li><a :href="url" class="menu__link">{{link_name}}</a></li>
</template>

<script>
export default {
  name: "AppNavItem",

  props: [
    'link_name',
    'url'
  ]

}
</script>

<style scoped>

</style>