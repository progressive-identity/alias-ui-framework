import AFooter from './AFooter.vue'
import { Meta, StoryFn } from '@storybook/vue3'
export default {
  title: 'Atomics/AFooter',
  component: AFooter,
  argTypes: {},
  args: {
    externalLinks: [],
    internalLinks: [],
  },
} as Meta<typeof AFooter>

const Template: StoryFn<typeof AFooter> = (args) => ({
  components: { AFooter },
  setup() {
    return { args }
  },
  template: '<AFooter v-bind="args"/>',
})
export const Default = Template.bind({})
