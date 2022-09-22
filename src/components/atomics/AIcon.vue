<template>
  <component :is="iconComponent" v-bind="$attrs" :class="svgClasses" />
</template>
<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue'
import { IconSizes } from '../../AliasSizes'
// TODO: find a way to dynamically import only the used component at compile time in the project using Alias UI Framework
import * as outlineHeroicons from '@heroicons/vue/24/outline'
import * as solidHeroicons from '@heroicons/vue/24/solid'
import { AliasIconTypes } from '../../AliasIcons'

const props = defineProps({
  /**
   * The size of the svg icon
   * Possible values are defined in the {@link IconSizes} enum
   */
  size: {
    type: String as PropType<IconSizes>,
    default: IconSizes.MEDIUM,
    validator: function (value: string) {
      const stringArr: readonly string[] = Object.values(IconSizes)
      return stringArr.includes(value)
    },
    required: false,
  },

  /**
   * The name of the heroicon svg icon
   * possible values defined here {@link https://unpkg.com/browse/@heroicons/vue@2.0.11/}
   * Example: ArchiveBox
   */
  // TODO: handle also mdi-icons
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String as PropType<AliasIconTypes>,
    default: AliasIconTypes.OUTLINE,
    required: false,
    validator: function (value: string) {
      const stringArr: readonly string[] = Object.values(AliasIconTypes)
      return stringArr.includes(value)
    },
  },
})

const { size, name, type } = toRefs(props)

const sizesToClasses = Object.freeze({
  [IconSizes.SMALL]: `alias-w-2`,
  [IconSizes.MEDIUM]: `alias-w-5`,
  [IconSizes.LARGE]: `alias-w-10`,
})

const svgClasses = computed(() => {
  return sizesToClasses[size.value] || `alias-w-5 alias-h-5`
})

const iconComponent = computed(() => {
  const iconName = `${name.value}Icon`
  return type.value === 'solid'
    ? solidHeroicons[iconName as keyof typeof solidHeroicons]
    : outlineHeroicons[iconName as keyof typeof outlineHeroicons]
})
</script>
