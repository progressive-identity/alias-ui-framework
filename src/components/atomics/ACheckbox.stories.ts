import ACheckbox from './ACheckbox.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Atomics/ACheckbox',
  component: ACheckbox,
  argTypes: {},
} as Meta<typeof ACheckbox>

const Template: StoryFn<typeof ACheckbox> = (args) => ({
  components: { ACheckbox },
  setup() {
    return { args }
  },
  template: '<ACheckbox v-bind="args" />',
})

export const Default = Template.bind({})
