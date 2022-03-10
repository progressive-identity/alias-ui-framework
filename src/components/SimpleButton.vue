
<template>
  <v-btn
    :class="classes"
    :disabled="disabled"
    v-bind="getSize"
    @click="onClick">
    <v-icon>
      {{ iconLeft }}
    </v-icon>
    {{ label }}
    <v-icon>
      {{ iconRight }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "SimpleButton",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    type: {
      type: String,
      default: "alias-primary",
      validator: function (value) {
        return ["alias-primary", "warning", "danger"].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      default: 'lg',
      validator: function (value) {
        return ["xs", "sm", "lg", "xl"].indexOf(value) !== -1
      },
    },
    // List of icons available here https://materialdesignicons.com/
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        "simple-button": true,
        [`simple-button--${this.type}`]: true,
      }
    },
    getSize() {
      const size = {xs:'x-small',sm:'small',lg:'large',xl:'x-small'}[this.size]
      return size ? { [size]: true } : {}
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick")
    },
  },
}
</script>
