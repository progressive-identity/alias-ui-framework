import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'
import colorsForTailwind from "@/plugins/tw-colors-for-vuetify"
import { theme } from '../../tailwind.config'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                ...colorsForTailwind,
                primary: theme.extend.colors['alias-primary']['500']
            }
        }
    }
})
