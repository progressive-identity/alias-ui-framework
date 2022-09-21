import ACheckbox from './ACheckbox.vue'
import { Meta, StoryFn } from '@storybook/vue3'
// import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
// import { AliasColorNames } from '../../AliasColors'
// import { ButtonSizes } from '../../AliasSizes'

// const colorPropName = ArgTypeUtils.propNameToString(ACheckbox, 'color')
// const sizePropName = ArgTypeUtils.propNameToString(ACheckbox, 'size')
// const iconPathPropName = ArgTypeUtils.propNameToString(ACheckbox, 'iconPath')
export default {
  title: 'Atomics/ACheckbox',
  component: ACheckbox,
  argTypes: {
    // [colorPropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
    //   AButton,
    //   colorPropName,
    //   AliasColorNames
    // ),
    // [sizePropName]: ArgTypeUtils.buildArgTypeFromEnumProp(
    //   AButton,
    //   sizePropName,
    //   ButtonSizes
    // ),
  },
  // args: {
  //   label: 'Click Me',
  // },
} as Meta<typeof ACheckbox>

const Template: StoryFn<typeof ACheckbox> = (args) => ({
  components: { ACheckbox },
  setup() {
    return { args }
  },
  template: '<ACheckbox v-bind="args" />',
})

export const Default = Template.bind({})
