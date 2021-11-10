<template>
<!-- This example requires Tailwind CSS v1.4.0+ -->
<div class="relative z-10 bg-white shadow-md">
  <div class="px-4 mx-auto max-w-md sm:px-6">
    <div class="flex items-center justify-between py-4 md:justify-start md:space-x-10">
      <div class="order-1 lg:w-0 lg:flex-1">
      </div>
      <nav class="order-2 space-x-10">
        <div class="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900">
          <img
                src="/images/cat.png"
                class="object-cover w-10 mx-auto"
              />Mohamad Irvan Fajar Ali
        </div>
      </nav>
      <div class="relative flex items-center justify-center flex-1 order-2 w-0 px-3 space-x-8 md:justify-end md:px-0">
      </div>
    </div>
  </div>

  <!-- Menu view on mobile -->
  <!-- <transition name="menu">
    <div v-show="open">
      <div class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
        <div class="rounded-lg shadow-lg">
          <div class="bg-white divide-y-2 rounded-lg shadow-xs divide-gray-50">
            <div class="px-5 pt-5 pb-6 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow">
                </div>
                <div class="-mr-2">
                  <button type="button" @click="open = !open" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
                    <client-only>
                      <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </client-only>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid row-gap-8">
                  <nuxt-link to="/" class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Beranda
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/artikel" class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Artikel
                    </div>
                  </nuxt-link>
                  <nuxt-link to="/video" class="flex items-center p-3 -m-3 space-x-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50">
                    <div class="text-base font-medium leading-6 text-gray-900">
                      Video
                    </div>
                  </nuxt-link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition> -->
  <!-- end of mobile view menu -->
</div>

</template>
<script>
export default {
  data: () => ({
    open: false
  }),
}
</script>

<style scoped>

.menu-enter-active {
  @apply duration-300;
  @apply ease-out;
}

.menu-leave-active {
  @apply duration-200;
  @apply ease-in;
}

.menu-enter-to, .menu-leave {
  @apply opacity-100;
  @apply scale-100;
}

.menu-enter, .menu-leave-to {
  @apply opacity-0;
  @apply scale-75;
}

</style>


