<template>
  <div class="alias-block alias-py-2">
    <p
      v-if="!state.valid && !state.checked"
      v-for="error in state.errors"
      class="alias-mt-1 alias-text-sm alias-font-normal alias-text-red-600"
      id="error"
    >
      {{ error }}
    </p>

    <div class="alias-flex alias-h-5 alias-items-center">
      <input
        v-model="state.checked"
        type="checkbox"
        @change="update"
        class="alias-h-4 alias-w-4 alias-rounded alias-border-gray-300 alias-text-primary-600 focus:alias-ring-primary-500"
      />
      <div class="alias-ml-3 alias-text-sm">
        <label class="alias-text-sm">{{ label }}</label>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, toRefs } from 'vue'
import { validate } from '../../composables/useValidation.js'

const props = defineProps({
  /**
   * The value of the label associated with the checkbox
   */
  label: {
    type: String,
    default: '',
  },
  /**
   * The value of the title associated with the checkbox
   */
  title: {
    type: String,
    default: '',
  },
  // TODO: add the doc for this prop
  namePath: {
    type: String,
    default: null,
  },
  /**
   * Specify if a checkbox is required
   */
  required: {
    type: Boolean,
    default: true,
  },
})

const state = reactive({
  valid: true,
  errors: [],
  checked: false,
})

const emits = defineEmits(['change:checked'])

const update = () => {
  validate(state, props)
  emits('change:checked', state.checked)
}
</script>
