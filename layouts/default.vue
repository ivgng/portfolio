<template>
  <div>
    <div class="fixed z-10 w-full">
      <Header />
    </div>
    <div class="z-0 pt-16 transition-all duration-500 ease-in-out bg-white dark:bg-gray-800">
      <Nuxt />
    </div>
    <Footer />
    <ToggleMode />
  </div>
</template>

<script>

import ToggleMode from '~/components/ToggleMode'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  data: () => ({
    open: false,
  }),
  components: {
    ToggleMode,
    Header,
    Footer,
  },
  methods : {
    openMenu() {
      if(this.open){
        this.open = false
      }else{
        this.open = true
      }
    },
  }
}
</script>

<style>
html {
  @apply font-quicksand;
}
</style>

<style scoped>
.menu-button {
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.light-mode .menu-button__hamburger {
  width: 22px;
  height: 3px;
  background: #1A202C;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
  transition: all .2s ease-in-out;
}

.dark-mode .menu-button__hamburger {
  width: 22px;
  height: 3px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
  transition: all .2s ease-in-out;
}



.light-mode .menu-button__hamburger::after,
.light-mode .menu-button__hamburger::before {
  content: '';
  position: absolute;
  width: 22px;
  height: 3px;
  background: #1A202C;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
  transition: all .2s ease-in-out;
}

.dark-mode .menu-button__hamburger::after,
.dark-mode .menu-button__hamburger::before {
  content: '';
  position: absolute;
  width: 22px;
  height: 3px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
  transition: all .2s ease-in-out;
}

.menu-button__hamburger::before {
  transform: translateY(-10px);
}

.menu-button__hamburger::after {
  transform: translateY(10px);
}

.menu-button.open .menu-button__hamburger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}

.menu-button.open .menu-button__hamburger::before {
  transform: rotate(45deg) translate(35px, -35px);
}

.menu-button.open .menu-button__hamburger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}


</style>
