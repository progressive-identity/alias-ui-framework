<template>
  <footer class="alias-text-alias-gray-400 alias-p-4">
    <div class="alias-mx-auto alias-max-w-7xl alias-space-y-4">
      <div class="flex-space-12">
        <router-link
          v-for="link in internalLinks"
          :key="link.type"
          :to="link.params.slug"
          class="alias-mx-10 hover:alias-text-gray-600"
          >{{ link.label }}
        </router-link>
      </div>
      <div class="flex-space-6">
        <a
          v-for="link in props.externalLinks"
          :key="link.name"
          target="_blank"
          :href="link.href"
          class="hover:alias-text-gray-600"
        >
          {{ link.name }}
        </a>
      </div>
      <div>
        <p class="alias-text-center alias-text-base">
          &copy; 2022 CODE IS LAW.
        </p>
      </div>
    </div>
    <div>
      <p
        v-if="props.version"
        class="alias-w-full alias-text-right alias-text-xs"
      >
        v{{ version }}
      </p>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  /**
   *The actual version of the app
   */
  version: {
    type: String,
    default: '',
  },
  /**
   * Links redirecting outside the app   */
  externalLinks: {
    type: Array,
    default: () => [],
  },
  /**
   * Links redirecting inside the app   */
  internalLinks: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.flex-space-12 {
  @apply alias-flex alias-justify-center alias-space-x-12;
}

.flex-space-6 {
  @apply alias-flex alias-justify-center alias-space-x-6;
}
</style>
