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
    color: {
      type: String,
      required: false,
      default: 'alias-primary'
    },
    rules: {
      type: Array,
      required: false,
      default() {
        return []
      },
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
      return this.rules.map(rule => validationRules[rule])
    },
    hideHint() {
      const hide = (this.maxLength === '' && this.rules.length === 0)
      return hide ? {['hide-details']: true} : {}
    },
  },
}
</script>
