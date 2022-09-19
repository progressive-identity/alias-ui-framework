<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    :class="svgClasses"
    v-bind="$attrs"
  >
    <path fill-rule="evenodd" :d="path" clip-rule="evenodd" />
  </svg>
</template>
<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue'
import { IconSizes } from '../../AliasSizes'

const props = defineProps({
  /**
   * The svg path of the button
   * This path is agnostic and can be taken from mdi components or heroicons
   */
  path: {
    type: String,
    required: true,
  },
  /**
   * The size of the svg icon
   * Possible values are defined in the {@link IconSizes} enum
   */
  size: {
    type: String as PropType<IconSizes>,
    default: IconSizes.MEDIUM,
    validator: function (value: string) {
      return value in IconSizes
    },
  },
})

const { size, path } = toRefs(props)
const sizesToClasses = Object.freeze({
  [IconSizes.SMALL]: `alias-w-2 alias-h-2`,
  [IconSizes.MEDIUM]: `alias-w-5 alias-h-5`,
  [IconSizes.LARGE]: `alias-w-10 alias-h-10`,
})

const svgClasses = computed(() => {
  return sizesToClasses[size.value] || `alias-w-5 alias-h-5`
})
</script>
