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
    // list: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['first', 'second'],
    //   mapping: {
    //     first: [{ name: 'toto' }, { name: 'tutu' }],
    //     second: { name: 'toto' },
    //   },
    // },
    //
    // modelValue: {
    //   control: {
    //     type: 'array',
    //     labels: {
    //       first: 'First toto',
    //       second: 'Second toto',
    //     },
    //   },
    //   options: ['first'],
    //   mapping: {
    //     first: [{ name: 'toto' }, { name: 'tutu' }],
    //   },
    // },
  },
} as Meta<typeof ACheckbox>

const Template: StoryFn<typeof ACheckbox> = (args) => ({
  components: { ACheckbox },
  setup() {
    return { args }
  },
  template:
    "<ACheckbox v-bind=\"args\" :list=\"[{ name: 'toto' }, { name: 'tutu' }]\" :model-value=\"[{ name: 'toto' }, { name: 'tutu' }]\" />",
})

export const Default = Template.bind({})
