<template>
  <AButton :label="message" />
  <input v-model="message" />
  {{ message }}
  <br />
  <br />
  <br />
  AINPUT
  <AInput
    v-model="message"
    label="test"
    required="true"
    :trimOutput="false"
    placeholder="test tes test "
    :rules="[(v) => v === 'ggg' || 'ggg is required']"
  />
  <br />
  coucou
  <AIcon name="Beaker" />
</template>
<script setup lang="ts">
import AButton from '../../../src/components/atomics/AButton.vue'
import AInput from '../../../src/components/inputs/AInput.vue'
import AIcon from '../../../src/components/atomics/AIcon.vue'
import { ref } from 'vue'

const message = ref('')
</script>
