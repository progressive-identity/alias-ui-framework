import AButton from './AButton.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
import { AliasColorNames } from '../../AliasColors'

const colorPropName = ArgTypeUtils.propNameToString(AButton, 'color')
export default {
  title: 'Atomics/AButton',
  component: AButton,
  argTypes: {
    [colorPropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
      AButton,
      colorPropName,
      AliasColorNames
    ),
  },
  args: {
    label: 'Click Me',
  },
} as Meta<typeof AButton>

const Template: StoryFn<typeof AButton> = (args) => ({
  components: { AButton },
  setup() {
    return { args }
  },
  template: '<AButton v-bind="args" />',
})

export const Default = Template.bind({})
