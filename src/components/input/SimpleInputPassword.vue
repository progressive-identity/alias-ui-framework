<template>
  <SimpleInputText
      :icon-right="show ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show ? 'text' : 'password'"
      :click-action-icon-right="toggleVisibility"
      v-bind="[$props, $attrs]"
  />
</template>

<script>
import SimpleInputText from "@/components/input/SimpleInputText"

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
