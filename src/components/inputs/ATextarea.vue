<template>
  <div class="alias-block alias-py-2">
    <label class="u-label"
      >{{ label }}
      <span v-if="required && label.length > 0"> *</span>
    </label>
    <textarea
      :value="modelValue"
      class="u-input"
      :placeholder="placeholder"
      :rows="rows"
      @change="handleChange($event.target.value)"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { validate } from '../../composables/useValidation'

const emit = defineEmits(['update:modelValue'])
const state = reactive({ valid: true, errors: [] })

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  required: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 5,
  },
})

function handleChange(targetValue) {
  emit('update:modelValue', targetValue?.trim())
  validate(state, props, targetValue)
}
</script>

<style scoped>
.u-label {
  @apply alias-block alias-text-xs alias-font-medium alias-text-gray-900;
}

.u-input {
  @apply alias-mt-1 alias-w-full alias-rounded-md alias-border alias-border-gray-300 alias-px-3 alias-py-2 alias-text-sm;
}
</style>
