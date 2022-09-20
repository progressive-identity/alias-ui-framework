<template>
  <SwitchGroup as="div" class="alias-flex alias-items-center alias-pt-2 alias-pb-2">
    <SwitchLabel
        v-if="label"
        as="span"
        class="alias-mr-3"
    >
      <span class="alias-block alias-text-xs alias-font-medium alias-text-gray-900">{{ label }}</span>
    </SwitchLabel>
    <Switch
        v-model="checked"
        @update:checked="update"
        :class="[checked ? 'alias-bg-primary-500' : 'alias-bg-gray-200']"
        class="alias-relative alias-inline-flex alias-w-[74px] alias-shrink-0 alias-cursor-pointer alias-rounded-full
        alias-border-2 alias-border-transparent alias-transition-colors alias-duration-200 alias-ease-in-out
        focus:alias-outline-none focus:alias-ring-2 focus:alias-ring-offset-2 focus:alias-ring-primary-500"
    >
      <span aria-hidden="true"
          :class="[checked ? 'alias-translate-x-9' : 'alias-translate-x-0']"
          class="alias-pointer-events-none alias-inline-block alias-h-[34px] alias-w-[34px]
          alias-transform alias-rounded-full alias-bg-white alias-shadow alias-ring-0 alias-transition
          alias-duration-200 alias-ease-in-out"
    />
    </Switch>
  </SwitchGroup>
</template>

<script setup lang="ts">
import {Switch, SwitchGroup, SwitchLabel} from '@headlessui/vue'
import { PropType, toRefs } from 'vue'
import { ColorNames } from '../../AliasColors'

const props = defineProps({
  type: { type: String as PropType<ColorNames>, required: true },
  /**
   * The text displayed on the left of the switch
   */
  label: {
    type: String,
    default: ''
  },
  /**
   * The value of the switch, if it has been checked or not
   */
  checked: {
    type: Boolean,
    required: true
  }
})
const {checked} = toRefs(props)


const emits = defineEmits(['update:checked'])

const update = (value: any) => {
  emits('update:checked', value)
}

</script>