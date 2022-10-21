import AInput from './AInput.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
import { HtmlInputTypes } from '../../constants/HtmlTypes'
import { InputSizes } from '../../constants/AliasSizes'

const typePropName = ArgTypeUtils.propNameToString(AInput, 'type')
const sizePropName = ArgTypeUtils.propNameToString(AInput, 'size')
// @ts-ignore
const defaultArgTypes = ArgTypeUtils.buildDefaultArgTypesFromProps(AInput.props)

export default {
  title: 'Atomics/AInput',
  component: AInput,
  argTypes: {
    ...defaultArgTypes,
    [typePropName]: ArgTypeUtils.buildArgTypeFromArrayProp(
      AInput,
      typePropName,
      HtmlInputTypes
    ),
    [sizePropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
      AInput,
      sizePropName,
      InputSizes
    ),
  },
  args: {
    placeholder: 'A beautiful placeholder',
  },
} as Meta<typeof AInput>

const Template: StoryFn<typeof AInput> = (args) => ({
  components: { AInput },
  setup() {
    return { args }
  },
  template: `<AInput v-bind="args" />`,
})

export const Default = Template.bind({})
export const WithValue = Template.bind({})
// TODO : handle modelValue (aka v-model) properly
WithValue.args = {
  // @ts-ignore
  modelValue: 'Some value',
}
