<template>
  <button type="button" v-bind="$attrs" :class="buttonClasses">
    <AIcon
      v-if="iconName"
      :name="iconName"
      :type="iconType"
      :size="iconSize"
      :class="iconClasses"
    />
    {{ label }}
  </button>
</template>
<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue'
import { AliasColorNames } from '../../AliasColors'
import { ButtonSizes } from '../../AliasSizes'
import AIcon from './AIcon.vue'
import { AliasIconTypes } from '../../AliasIcons'

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
      const stringArr: readonly string[] = Object.values(AliasColorNames)
      return stringArr.includes(value)
    },
  },

  /**
   * The size of the button
   * The possible values are listed in {@link ButtonSizes}
   */
  size: {
    type: String as PropType<ButtonSizes>,
    required: false,
    default: ButtonSizes.MEDIUM,
  },

  /**
   * The name of the heroicon svg icon
   * possible values defined here {@link https://unpkg.com/browse/@heroicons/vue@2.0.11/}
   * Example: ArchiveBox
   * @see {@link AIcon}
   */
  iconName: {
    type: String,
    required: false,
  },
  iconType: {
    type: String as PropType<AliasIconTypes>,
    default: AliasIconTypes.OUTLINE,
    required: false,
    validator: function (value: string) {
      const stringArr: readonly string[] = Object.values(AliasIconTypes)
      return stringArr.includes(value)
    },
  },
})

const { color, size, iconName, label } = toRefs(props)

const buttonClasses = computed(() => {
  return {
    'a-button': true,
    [`a-button--${color.value}`]: true,
    [`a-button--${size.value}`]: true,
    'a-button--icon': iconName?.value && !label?.value,
  }
})

const iconClasses = computed(() => {
  return {
    'alias-mr-1': label?.value,
  }
})

const iconSize = computed(() => {
  return size.value
})
</script>
<style scoped>
/* GENERAL BUTTON STYLE */

.a-button {
  @apply alias-inline-flex alias-cursor-pointer alias-items-center alias-rounded-md alias-border alias-font-medium alias-text-white alias-shadow-sm;
}

.a-button:focus {
  @apply alias-ring-2 alias-ring-offset-2;
}

.a-button--icon {
  @apply alias-px-2 alias-py-2;
}

/* SMALL SIZE */

.a-button--small {
  @apply alias-px-2.5 alias-py-1.5 alias-text-xs;
}

/* MEDIUM SIZE */

.a-button--medium {
  @apply alias-px-4 alias-py-2 alias-text-sm;
}

/* LARGE SIZE */

.a-button--large {
  @apply alias-px-6 alias-py-3 alias-text-base;
}

/* PRIMARY */

.a-button--primary {
  @apply alias-bg-primary-500;
}

.a-button--primary:hover {
  @apply alias-bg-primary-700 alias-outline-none;
}

.a-button--primary:focus {
  @apply alias-ring-primary-500;
}

/* SECONDARY */

.a-button--secondary {
  @apply alias-bg-secondary-500;
}

.a-button--secondary:hover {
  @apply alias-bg-secondary-700 alias-outline-none;
}

.a-button--secondary:focus {
  @apply alias-ring-secondary-500;
}

/* WARNING */

.a-button--warning {
  @apply alias-bg-warning-500;
}

.a-button--warning:hover {
  @apply alias-bg-warning-700 alias-outline-none;
}

.a-button--warning:focus {
  @apply alias-ring-warning-500;
}

/* DANGER */

.a-button--danger {
  @apply alias-bg-danger-500;
}

.a-button--danger:hover {
  @apply alias-bg-danger-700 alias-outline-none;
}

.a-button--danger:focus {
  @apply alias-ring-danger-500;
}
</style>
