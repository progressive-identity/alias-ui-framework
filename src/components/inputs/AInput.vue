<template>
  <label class="a-label"
    >{{ label }}
    <span v-if="required && label.length > 0"> *</span>
  </label>
  <div class="alias-flex">
    <input
      v-bind="$attrs"
      :type="type"
      :value="modelValue"
      :class="inputClasses"
      @input="updateValue"
      :placeholder="placeholder"
    />

    <AIcon
      v-if="modelValue.length > 0"
      class="alias-z-5 alias-relative alias-right-6 alias-cursor-pointer alias-text-gray-300"
      name="XMark"
      @click="resetValue"
    />
  </div>

  <AInputErrors v-if="!state.valid" :errors="state.errors" />
</template>

<script setup lang="ts">
import { computed, nextTick, PropType, reactive, toRefs } from 'vue'
import { HtmlInputTypeAttribute, HtmlInputTypes } from '../../HtmlTypes'
import { Rule, validate } from '../../composables/useValidation'
import { InputSizes } from '../../AliasSizes'
import AIcon from '../atomics/AIcon.vue'
import AInputErrors from './AInputErrors.vue'

const state = reactive({ valid: true, errors: [] })
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true,
  },
  type: {
    type: String as PropType<HtmlInputTypeAttribute>,
    default: 'text',
    required: false,
    validator: function (value: string) {
      const stringArr: readonly string[] = HtmlInputTypes
      return stringArr.includes(value)
    },
  },
  required: {
    type: Boolean,
    default: false,
    required: false,
  },
  label: {
    type: String,
    default: '',
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  trimOutput: {
    type: Boolean,
    default: true,
    required: false,
  },
  size: {
    type: String as PropType<InputSizes>,
    default: InputSizes.LARGE,
    required: false,
    validator: function (value: string) {
      const stringArr: readonly string[] = Object.values(InputSizes)
      return stringArr.includes(value)
    },
  },
  rules: {
    type: Array as PropType<Rule[]>,
    default: () => [],
    required: false,
  },
})

const { modelValue } = toRefs(props)

const inputClasses = computed(() => {
  return {
    'a-input': true,
    [`a-input--${props.size}`]: true,
  }
})

const emit = defineEmits(['update:modelValue'])
const updateValue = (event: { target: { value: string } }) => {
  const value = props.trimOutput
    ? event.target.value.trim()
    : event.target.value

  validate(state, props, value)
  emit('update:modelValue', value)
}

const resetValue = async () => {
  const resetValue = ''
  modelValue.value = resetValue
  validate(state, props, resetValue)
  await nextTick()
  emit('update:modelValue', resetValue)
}
</script>
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<style scoped>
/* GENERAL INPUT STYLE */

.a-input {
  @apply alias-flex alias-w-full alias-justify-between alias-rounded-md alias-border alias-border-solid alias-border-gray-300 alias-p-2 alias-text-sm placeholder:alias-italic placeholder:alias-text-gray-300;
}

.u-button:focus-within {
  @apply alias-z-10 alias-border-primary-500 alias-ring-1 alias-ring-primary-500;
}

.a-input--small {
  @apply alias-w-48;
}

.a-input--medium {
  @apply alias-w-64;
}

.a-input--large {
  @apply alias-w-80;
}

.a-input--extra-large {
  @apply alias-w-96;
}

/* GENERAL LABEL STYLE */

.a-label {
  @apply alias-block alias-text-xs alias-font-medium alias-text-gray-900;
}
</style>
