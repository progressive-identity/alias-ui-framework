<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue'
import { AliasColorNames } from '../../AliasColors'
import { ButtonSizes } from '../../AliasSizes'
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
  size: {
    type: String as PropType<ButtonSizes>,
    required: false,
    default: ButtonSizes.MEDIUM,
  },
  // TODO: add icon
  // icon: {
  //   type: String,
  //   required: false
  // },
})

const { color, size } = toRefs(props)

const classes = computed(() => {
  return {
    'u-button': true,
    [`u-button--${color.value}`]: true,
    [`u-button--${size.value}`]: true,
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
/* GENERAL BUTTON STYLE */

.u-button {
  @apply alias-inline-flex alias-cursor-pointer alias-items-center alias-rounded-md alias-border alias-font-medium alias-text-white alias-shadow-sm;
}

.u-button:focus {
  @apply alias-ring-2 alias-ring-offset-2;
}

.u-button--icon {
  @apply alias-px-2 alias-py-2;
}

/* SMALL SIZE */

.u-button--small {
  @apply alias-px-2.5 alias-py-1.5 alias-text-xs;
}

/* MEDIUM SIZE */

.u-button--medium {
  @apply alias-px-4 alias-py-2 alias-text-sm;
}

/* LARGE SIZE */

.u-button--large {
  @apply alias-px-6 alias-py-3 alias-text-base;
}

/* PRIMARY */

.u-button--primary {
  @apply alias-bg-primary-500;
}

.u-button--primary:hover {
  @apply alias-bg-primary-700 alias-outline-none;
}

.u-button--primary:focus {
  @apply alias-ring-primary-500;
}

/* SECONDARY */

.u-button--secondary {
  @apply alias-bg-secondary-500;
}

.u-button--secondary:hover {
  @apply alias-bg-secondary-700 alias-outline-none;
}

.u-button--secondary:focus {
  @apply alias-ring-secondary-500;
}

/* WARNING */

.u-button--warning {
  @apply alias-bg-warning-500;
}

.u-button--warning:hover {
  @apply alias-bg-warning-700 alias-outline-none;
}

.u-button--warning:focus {
  @apply alias-ring-warning-500;
}

/* DANGER */

.u-button--danger {
  @apply alias-bg-danger-500;
}

.u-button--danger:hover {
  @apply alias-bg-danger-700 alias-outline-none;
}

.u-button--danger:focus {
  @apply alias-ring-danger-500;
}
</style>
