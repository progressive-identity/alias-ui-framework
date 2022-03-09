import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'
import formattedColors from "@/plugins/tailwindcolors-into-vuetify"
import { theme } from '../../tailwind.config'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            light: {
                ...formattedColors,
                primary: theme.extend.colors['alias-primary']['500']
            }
        }
    }
})
