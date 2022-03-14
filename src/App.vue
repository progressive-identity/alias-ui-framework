<template>
  <v-app>
    <div class="place-items-center flex">
      <v-main>
        <div class="text-center">
          <span>Buttons</span>
        </div>
        <div class="place-content-center flex space-x-2">
          <SimpleButton label="Primary"></SimpleButton>
          <SimpleButton label="Warning" type="warning"></SimpleButton>
          <SimpleButton label="Danger with icon" type="danger" :click-event="alert"
                        icon-right="mdi-pencil"></SimpleButton>
        </div>
        <div class="text-center">
          <span>Select</span>
        </div>
        <div class="place-content-center flex">
          <v-col
              class="d-flex"
              cols="12"
              sm="4"
          >
            <SimpleSelect label="Default" :items="selectItems"></SimpleSelect>
          </v-col>
          <v-col
              class="d-flex"
              cols="12"
              sm="4"
          >
            <SimpleSelect label="WithColor" :items="selectItems" color="green-700"></SimpleSelect>
          </v-col>
        </div>
        <div class="text-center">
          <span>Input</span>
        </div>
        <div>
          <div class="place-content-center flex">
            <v-col
                class="d-flex space-x-2"
                cols="12"
                sm="10"
            >
              <SimpleInputText/>
              <SimpleInputText label="/w Placeholder" placeholder="placeholder"></SimpleInputText>
              <SimpleInputText label="/w Icon" icon-right="mdi-atom"></SimpleInputText>
              <SimpleInputText label="Clearable" clearable></SimpleInputText>
              <SimpleInputText label="/w Length" required max-length="10"></SimpleInputText>
              <SimpleInputPassword label="Password"/>
              <SimpleInputText label="emailRules" :rules="rulesTest"/>
            </v-col>
          </div>
        </div>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld"
import SimpleButton from "@/components/SimpleButton"
import SimpleInputText from "@/components/input/SimpleInputText"
import SimpleInputPassword from "@/components/input/SimpleInputPassword"
import SimpleSelect from "@/components/SimpleSelect"

export default {
  name: "App",

  components: {
    SimpleInputPassword,
    SimpleInputText,
    SimpleSelect,
    SimpleButton,
    HelloWorld
  },

  data: () => ({
    selectItems: ['option1', 'option2', 'option3'],
    rulesTest: ['emailRules', 'urlRules']
  }),
  methods: {
    alert() {
      console.log('test')
    }
  }
}
</script>
