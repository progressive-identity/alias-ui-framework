<template>
  <SimpleInputText
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      :click-action-icon-right="toggleVisibility"
      v-bind="[$props, $attrs]"
  />
</template>

<script>
import SimpleInputText from "./SimpleInputText"

export default {
  name: "SimpleInputPassword",
  components: {SimpleInputText},
  props: {},

  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggleVisibility() {
      this.show = !this.show
    },
  }
}
</script>
