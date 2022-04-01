<template>
  <div class="header__menu menu">
    <div class="menu__icon" @click="toggleMenu">
      <span></span>
    </div>
    <nav class="menu__body">
      <ul class="menu__list">
       <AppNavItem
           v-for="link in links"
           :key="link.name"
           :link_name="link.name"
           :url="link.path"
       />
      </ul>
    </nav>
  </div>
</template>

<script>
import AppNavItem from "./AppNavItem.vue";
export default {
  name: "AppNav",

  components: {
    AppNavItem
  },
  data () {
    return {
      links:  [
        {
          name: 'HOME',
          path: '/'
        },
        {
          name: 'FEATURES',
          path: '/features'
        },
        {
          name: 'SERVICE',
          path: '/service'
        },
        {
          name: 'PRICE',
          path: '/price'
        }
      ]
    }
  },
  methods: {
    toggleMenu (){
      const iconMenu = document.querySelector('.menu__icon');
      const menuBody = document.querySelector('.menu__body');

      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    }
  }
}
</script>

<style scoped>
.menu {
}
.menu__icon {
  display: none;
}
.menu__body {
}
.menu__list {
}
.menu__list > li {
  position: relative;
  margin: 0px 0px 0px 20px;
}
:deep(.menu__link) {
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
}
:deep(.menu__link:hover) {
  text-decoration: underline;
}
@media (min-width: 875px) {
  .menu__list {
    display: flex;
    align-items: center;
  }
  .menu__list > li {
    padding: 10px 0;
  }
}

@media (max-width: 875px) {
  .header__menu {
    margin: 0;
  }
  .menu__icon {
    z-index: 5;
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
  }
  .menu__icon span,
  .menu__icon::before,
  .menu__icon::after {
    left: 0;
    position: absolute;
    height: 10%;
    width: 100%;
    transition: all 0.3s ease 0s;
    background-color: #fff;
  }
  .menu__icon::before,
  .menu__icon::after {
    content: "";
  }
  .menu__icon::before {
    top: 0;
  }
  .menu__icon::after {
    bottom: 0;
  }
  .menu__icon span {
    top: 50%;
    transform: scale(1) translate(0px, -50%);
  }

  .menu__icon._active span {
    transform: scale(0) translate(0px, -50%);
  }
  .menu__icon._active::before {
    top: 50%;
    transform: rotate(-45deg) translate(0px, -50%);
  }
  .menu__icon._active::after {
    bottom: 50%;
    transform: rotate(45deg) translate(0px, 50%);
  }

  .menu__body {
    position: fixed;
    top: 0;
    left: -120%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 150px 30px 30px 30px;
    transition: left 0.3s ease 0s;
    overflow: auto;
  }
  .menu__body._active {
    left: 0;
  }

  .menu__body::before {
    content: "";
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    height: 150px;
    background-color: #912105;
    z-index: 2;
  }
  .menu__list > li {
    flex-wrap: wrap;
    margin: 0px 0px 30px 0px;
    text-align: center;
  }
  .menu__list > li:last-child {
    margin-bottom: 0;
  }
  .menu__list > li._active .menu__sub-list {
    display: block;
  }
  .menu__link {
    font-size: 24px;
  }
}
</style>