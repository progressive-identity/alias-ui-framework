<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue'
import { AliasColorNames } from '../../AliasColors'
// TODO: add icon to button
// import UIcon from '@/components/basic/UIcon.vue'
const props = defineProps({
  /**
   * The text displayed on the button
   */
  label: {
    type: String,
    required: false,
  },

  /**
   * The color of the button
   * The possible values are listed in {@link AliasColorNames}
   */
  color: {
    type: String as PropType<AliasColorNames>,
    required: false,
    default: AliasColorNames.PRIMARY,
    validator: function (value: string) {
      return value in AliasColorNames
    },
  },

  // TODO: add size
  // TODO: add icon
  // icon: {
  //   type: String,
  //   required: false
  // },
})

const { color } = toRefs(props)
const classes = computed(() => {
  return {
    'u-button': true,
    [`u-button--${color.value}`]: true,
    // ['u-button--icon']: (props.icon && !props.label)
  }
})
</script>

<template>
  <button type="button" :class="classes">
    <!--    <UIcon v-if="icon" :path="icon"/>-->
    {{ label }}
  </button>
</template>
<style scoped>
/*TODO: prefix classes*/
/* GENERAL BUTTON STYLE */

.u-button {
  @apply inline-flex items-center px-5 py-2 border shadow-sm text-white font-medium text-sm rounded-md;
}

.u-button:focus {
  @apply ring-2 ring-offset-2;
}

.u-button--icon {
  @apply px-2 py-2;
}

/* PRIMARY */

.u-button--primary {
  @apply bg-primary-500;
}

.u-button--primary:hover {
  @apply bg-primary-700 outline-none;
}

.u-button--primary:focus {
  @apply ring-primary-500;
}

/* SECONDARY */

.u-button--secondary {
  @apply bg-white text-gray-700 border-gray-300;
}

.u-button--secondary:hover {
  @apply bg-gray-50 outline-none;
}

.u-button--secondary:focus {
  @apply ring-primary-500;
}

/* WARNING */

.u-button--warning {
  @apply bg-yellow-500;
}

.u-button--warning:hover {
  @apply bg-yellow-700 outline-none;
}

.u-button--warning:focus {
  @apply ring-yellow-500;
}

/* DANGER */

.u-button--danger {
  @apply bg-red-500;
}

.u-button--danger:hover {
  @apply bg-red-700 outline-none;
}

.u-button--danger:focus {
  @apply ring-red-500;
}
</style>
