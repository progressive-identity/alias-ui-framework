<template>
  <button type="button" :class="classes">
    <!--    <UIcon v-if="icon" :path="icon"/>-->
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { ColorNames } from "../Colors";
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
  // icon: {
  //   type: String,
  //   required: false
  // },
  type: {
    type: String as PropType<ColorNames>,
    required: false,
    default: ColorNames.PRIMARY,
    validator: function (value: string) {
      return value in ColorNames;
    },
  },
});

const classes = computed(() => {
  return {
    "u-button": true,
    [`u-button--${props.type}`]: true,
    // ['u-button--icon']: (props.icon && !props.label)
  };
});
</script>
