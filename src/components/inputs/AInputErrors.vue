<template v-if="errors.length > 0">
  <span
    v-for="(error, i) in errors"
    :key="error + i"
    class="a-form-error"
    id="error"
  >
    {{ error }}
  </span>
</template>
<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  /**
   * An array of strings representing error messages
   */
  errors: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [],
  },
})
</script>
<style scoped>
.a-form-error {
  @apply alias-mt-1 alias-block alias-text-sm alias-font-normal alias-text-danger-600;
}
</style>
