import AIcon from './AIcon.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
import { IconSizes } from '../../AliasSizes'
import { AliasIconTypes } from '../../AliasIcons'

const typePropName = ArgTypeUtils.propNameToString(AIcon, 'type')
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
    [typePropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
      AIcon,
      typePropName,
      AliasIconTypes
    ),
  },
  args: {
    name: 'ArchiveBox',
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
