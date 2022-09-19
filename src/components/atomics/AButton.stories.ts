import AButton from './AButton.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
import { AliasColorNames } from '../../AliasColors'
import { ButtonSizes } from '../../AliasSizes'

const colorPropName = ArgTypeUtils.propNameToString(AButton, 'color')
const sizePropName = ArgTypeUtils.propNameToString(AButton, 'size')
export default {
  title: 'Atomics/AButton',
  component: AButton,
  argTypes: {
    [colorPropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
      AButton,
      colorPropName,
      AliasColorNames
    ),
    [sizePropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
      AButton,
      sizePropName,
      ButtonSizes
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
