import ACheckbox from './ACheckbox.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'

const defaultArgTypes = ArgTypeUtils.buildDefaultArgTypesFromProps(
  ACheckbox.props
)

export default {
  title: 'Atomics/ACheckbox',
  component: ACheckbox,
  argTypes: { ...defaultArgTypes },
} as Meta<typeof ACheckbox>

const Template: StoryFn<typeof ACheckbox> = (args) => ({
  components: { ACheckbox },
  setup() {
    return { args }
  },
  template: '<ACheckbox v-bind="args" />',
})

export const Default = Template.bind({})
