<template>
  <v-text-field
      :prepend-icon="iconLeft"
      :append-icon="iconRight"
      :counter="maxLength"
      :label="label"
      :disabled="disabled"
      :required="required"
      v-bind="[getType, hideHint]"
  >
  </v-text-field>
</template>

<script>
export default {
  name: "SimpleInput",

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
    // List of available icons here https://materialdesignicons.com/
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    getType() {
      return this.label.length > 0 ? {['outlined']: true} : {['solo']: true}
    },
    hideHint() {
      return this.maxLength === '' ? {['hide-details']: true} : {}
    }
  },
}
</script>
