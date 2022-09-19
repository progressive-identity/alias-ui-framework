import ASwitch from './ASwitch.vue'
import { Meta, StoryFn } from '@storybook/vue3'
import { ArgTypeUtils } from '../../../utils/ArgTypeUtils'
import { ColorNames } from '../../AliasColors'

export default {
    title: 'Atomics/ASwitch',
    component: ASwitch,
    argTypes: {
        type: ArgTypeUtils.buildArgTypeFromEnumProp(ASwitch, 'type', ColorNames)
    }
} as Meta<typeof ASwitch>

const Template: StoryFn<typeof ASwitch> = (args) => ({
    components: { ASwitch },
    setup() {
        return { args }
    },
    template: '<ASwitch v-bind="args" />'
})

export const Default = Template.bind({})