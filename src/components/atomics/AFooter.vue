<template>
  <!--  <CookiesBanner />-->
  <footer class="alias-text-alias-gray-400 alias-p-4">
    <div class="alias-mx-auto alias-max-w-7xl alias-space-y-4">
      <div class="alias-flex alias-justify-center alias-space-x-12">
        <router-link
          v-for="link in pagesRedirection"
          :key="link.type"
          :to="link"
          class="hover:alias-text-gray-600"
          >{{ link.label }}
          <!--          {{ $t(`menu.footer.${link.type}`) }}-->
        </router-link>
      </div>
      <div class="alias-flex alias-justify-center alias-space-x-6">
        <a
          v-for="link in props.externalLinks"
          :key="link.name"
          target="_blank"
          :href="link.href"
          class="hover:alias-text-gray-600"
        >
          external link
          <!--          <UIcon :path="link.icon" :size="24" />-->
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
    {{ pagesRedirection }}
  </footer>
</template>

<script setup>
// import UIcon from '@/components/basic/UIcon.vue'
// import CookiesBanner from '@/components/section/CookiesBanner.vue'
// import { mdiDiscord, mdiGithub, mdiLinkedin, mdiTwitter, mdiWeb } from '@mdi/js'

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
