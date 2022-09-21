<template>
  <AButton :label="message" />
  <input v-model="message" />
  {{ message }}
</template>
<script setup lang="ts">
import AButton from '../../../src/components/atomics/AButton.vue'
import { ref } from 'vue'

const message = ref('test')
</script>
