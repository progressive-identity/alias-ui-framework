import Button from "./AliasButton.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { ArgTypeUtils } from "../utils/ArgTypeUtils";
import { ColorNames } from "./Colors";

export default {
  title: "Atomics/Button",
  component: Button,
  argTypes: {
    type: ArgTypeUtils.buildArgTypeFromEnumProp(Button, "type", ColorNames),
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

export const Default = Template.bind({});
