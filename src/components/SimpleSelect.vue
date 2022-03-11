<template>
  <v-select
      rounded
      :menu-props="{ top: false, offsetY: true, rounded: 'b-xl' }"
      outlined
      v-bind="[$props, $attrs]"
  />
</template>

<script>
export default {
  name: "SimpleSelect",

  props: {},
}
</script>
