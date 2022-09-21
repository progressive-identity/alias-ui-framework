import AFooter from './AFooter.vue'
import { Meta, StoryFn } from '@storybook/vue3'
// eslint-disable-next-line no-unused-vars
import { externalLinks } from '../../../utils/constants/ExternalLinksConstants'
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
import { pagesRedirection } from '../../../utils/constants/LegalTextConstants'
export default {
  title: 'Atomics/AFooter',
  component: AFooter,
  argTypes: {},
  // args: {
  //   externalLinks: [],
  //   pagesRedirection: [],
  // },
} as Meta<typeof AFooter>

const Template: StoryFn<typeof AFooter> = (args) => ({
  components: { AFooter },
  setup() {
    return { args }
  },
  template: '<AFooter v-bind="args"/>',
})
export const Default = Template.bind({})
