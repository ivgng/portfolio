<template>
  <div class="right-0 top-0 fixed p-3 z-10">
    <label for="toggleMode" class="flex items-center text-center cursor-pointer p-2 rounded-lg">
      <div class="relative">
        <input id="toggleMode" type="checkbox" class="hidden" @click="toggle" />
        <div class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <div class="toggle__dot absolute w-6 h-6 dark:bg-gray-900 bg-white rounded-full shadow inset-y-0 left-0 bottom-0 object-center">
            <client-only>
              <svg v-if="$colorMode.value == 'light'" class="h-4 w-4 text-yellow-700 feather feather-sun mt-1 m-auto"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              <svg v-else class="h-4 w-4 text-yellow-500 feather feather-moon mt-1 m-auto"  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </client-only>
        </div>
      </div>
      <div class="ml-3 text-gray-700 font-medium">
      </div>
    </label>
  </div>
</template>

<script>
export default {
  methods : {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value == "light" ? "dark" : "light";
    }
  }
}
</script>

<style scoped>
.dark-mode #toggleMode:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #1A202C;
}

.light-mode #toggleMode:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #EDF2F7;
}

.toggle__dot {
  top: -.25rem;
  left: -.25rem;
  transition: all 0.3s ease-in-out;
}

</style>
