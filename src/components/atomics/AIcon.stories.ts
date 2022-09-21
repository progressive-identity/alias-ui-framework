import AIcon from './AIcon.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
import { IconSizes } from '../../AliasSizes'

const pathPropName = ArgTypeUtils.propNameToString(AIcon, 'path')
const sizePropName = ArgTypeUtils.propNameToString(AIcon, 'size')
export default {
  title: 'Atomics/AIcon',
  component: AIcon,
  argTypes: {
    [sizePropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
      AIcon,
      sizePropName,
      IconSizes
    ),
  },
  args: {
    [pathPropName]:
      'M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z',
    size: 5,
  },
} as Meta<typeof AIcon>

const Template: StoryFn<typeof AIcon> = (args) => ({
  components: { AIcon },
  setup() {
    return { args }
  },
  template: '<AIcon v-bind="args" />',
})

export const Default = Template.bind({})
