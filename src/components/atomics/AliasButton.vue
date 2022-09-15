<script setup lang="ts">
import { computed, PropType } from "vue";
import { ColorNames } from "../../AliasColors";
// TODO: add icon to button
// import UIcon from '@/components/basic/UIcon.vue'
defineProps({
  /**
   * The text displayed on the button
   */
  type: { type: String as PropType<ColorNames>, required: true },
  // icon: {
  //   type: String,
  //   required: false
  // },
  // type: {
  //   type: String as PropType<ColorNames>,
  //   required: false,
  //   default: ColorNames.PRIMARY,
  //   validator: function (value: string) {
  //     return value in ColorNames
  //   }
  // }
});
// const classes = computed(() => {
//   return {
//     "u-button": true,
//     [`u-button--${props.type}`]: true,
//     // ['u-button--icon']: (props.icon && !props.label)
//   };
// });
</script>

<template>
  <button type="button" class="alias-bg-primary-700 alias-text-primary-500">
    Coucou
    <!--    <UIcon v-if="icon" :path="icon"/>-->
    {{ label }} {{ type }} {{ testTest }}
  </button>
</template>
