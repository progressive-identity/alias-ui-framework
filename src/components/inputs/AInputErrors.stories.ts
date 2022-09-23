import AInputErrors from './AInputErrors.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'

const defaultArgTypes = ArgTypeUtils.buildDefaultArgTypesFromProps(
  AInputErrors.props
)

export default {
  title: 'Atomics/AInputErrors',
  component: AInputErrors,
  argTypes: { ...defaultArgTypes },
  args: {
    errors: ['A beautiful input error'],
  },
} as Meta<typeof AInputErrors>

const Template: StoryFn<typeof AInputErrors> = (args) => ({
  components: { AInputErrors },
  setup() {
    return { args }
  },
  template: '<AInputErrors v-bind="args" />',
})

export const Default = Template.bind({})
