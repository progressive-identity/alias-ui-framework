<!--Vuetify documentation : https://vuetifyjs.com/en/components/text-fields/-->
<template>
  <v-text-field
      class="rounded-xl"
      :prepend-icon="iconLeft"
      :append-icon="iconRight"
      :counter="maxLength"
      :label="label"
      :placeholder="placeholder"
      :clearable="clearable"
      :color="color"
      :disabled="disabled"
      :required="required"
      :rules="getRules"
      :type="type"
      v-bind="[getStyle, hideHint]"
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
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
    // @TODO to switch to alias-primary once merged
    color: {
      type: String,
      required: false,
      default: 'primary'
    },
    type: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    // Could be improved in the future to be able to have multiple rules
    rule: {
      type: String,
      required: false,
      default: '',
    },
    // List of available icons here https://materialdesignicons.com/
    iconLeft: {
      type: String,
      required: false,
      default: ''
    },
    iconRight: {
      type: String,
      required: false,
      default: ''
    },
    clickActionIconRight: {
      type: Function,
      required: false,
      default: undefined,
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
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
