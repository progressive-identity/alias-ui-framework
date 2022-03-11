<template>
  <v-select
    :items="items"
    :label="label"
    :color="color"
    rounded
    :menu-props="{ top: false, offsetY: true, rounded: 'b-xl' }"
    outlined
    :disabled="disabled"
  />
</template>

<script>
export default {
  name: "SimpleSelect",

  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    items: {
      type: Array,
      required: true,
      default: "",
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false
    },
  }
}
</script>
