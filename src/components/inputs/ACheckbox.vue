<template>
  <div class="alias-block alias-py-2">
    <AInputErrors v-if="!state.valid" :errors="state.errors" />
    <div class="alias-flex alias-h-5 alias-items-center">
      <input
        v-model="checked"
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
<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { validate } from '../../composables/useValidation'
import AInputErrors from './AInputErrors.vue'

const props = defineProps({
  /**
   * Specify if a checkbox is required
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * Specify if a checkbox is checked or not
   */
  checked: {
    type: Boolean,
    required: true,
  },
})

const { checked } = toRefs(props)

const state = reactive({
  valid: true,
  errors: [],
})

const emits = defineEmits(['change:checked'])

const update = () => {
  validate(state, props)
  emits('change:checked', checked.value)
}
</script>
