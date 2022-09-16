import AButton from './AButton.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
import { AliasColorNames } from '../../AliasColors'

export default {
  title: 'Atomics/AButton',
  component: AButton,
  argTypes: {
    type: ArgTypeUtils.buildArgTypeFromEnumProp(
      AButton,
      'type',
      AliasColorNames
    ),
  },
} as Meta<typeof AButton>

const Template: StoryFn<typeof AButton> = (args) => ({
  components: { Button: AButton },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />',
})

export const Default = Template.bind({})
