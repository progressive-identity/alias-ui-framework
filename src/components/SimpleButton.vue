<!--Vuetify documentation : https://vuetifyjs.com/en/components/buttons/-->
<template>
  <v-btn
      :class="classes"
      v-bind="[$props, $attrs]"
      @click="clickEvent">
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
    // List of icons available here https://materialdesignicons.com/
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    clickEvent: {
      type: Function,
      default() {
        return {}
      }
    },
  },

  computed: {
    classes() {
      return {
        "simple-button": true,
        [`simple-button--${this.type}`]: true,
      }
    },
  },
}
</script>
