<!--Vuetify documentation : https://vuetifyjs.com/en/components/text-fields/-->
<template>
  <v-text-field
      class="rounded-xl"
      :counter="maxLength"
      :label="label"
      :color="color"
      :rules="getRules"
      v-bind="[$attrs, $props, getStyle, hideHint]"
      v-on="clickActionIconRight ? { 'click:append': clickActionIconRight } : {}"
  >
  </v-text-field>
</template>

<script>
import validationRules from "@/components/input/validationRules"

export default {
  name: "SimpleInputText",

  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    maxLength: {
      type: String,
      required: false,
      default: '',
    },
    // @TODO to switch to alias-primary once merged
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    // Could be improved in the future to be able to have multiple rules
    rule: {
      type: String,
      required: false,
      default: '',
    },
    clickActionIconRight: {
      type: Function,
      required: false,
      default: undefined,
    },
  },

  computed: {
    getStyle() {
      return this.label.length > 0 ? {['outlined']: true} : {['solo']: true}
    },
    getRules() {
      return validationRules[this.rule]
    },
    hideHint() {
      const hide = (this.maxLength === '' && this.rule === '')
      return hide ? {['hide-details']: true} : {}
    },
  },
}
</script>
