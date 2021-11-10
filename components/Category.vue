<template>
  <nuxt-link to="/" :class="cssProps">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props:['customClass'],
  computed : {
    cssProps() {
      return this.customClass + ' py-1 px-2 text-xs text-white bg-red-500 rounded-sm'
    }
  },
  props: {
    customClass: {
      type: String,
      default:'',
    }
  }
}
</script>

<style scoped>

</style>
