import ATextarea from './ATextarea.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Atomics/ATextarea',
  component: ATextarea,
  argTypes: {},
  args: {
    label: 'Fill Me',
  },
} as Meta<typeof ATextarea>

const Template: StoryFn<typeof ATextarea> = (args) => ({
  components: { ATextarea },
  setup() {
    return { args }
  },
  template: '<ATextarea v-bind="args"/>',
})

export const Default = Template.bind({})
