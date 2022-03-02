<template>
  <button
    :class="classes"
    :disabled="disabled"
    type="button"
    @click="onClick"
  >
    {{ label }}
  </button>
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
    color: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "warning", "danger"].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
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
        [`simple-button--${this.size}`]: true,
        [`simple-button--${this.color}`]: true,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
