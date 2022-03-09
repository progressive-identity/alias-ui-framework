const colors = require('tailwindcss/colors')
const excludedProperties = ['inherit', 'current', 'transparent', 'black', 'white', 'lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

const filteredColors = Object.keys(colors)
    .filter(k => !excludedProperties.includes(k))
    .reduce((o, v) => {
        o[v] = colors[v]
        return o
    }, {})

let colorsForTailwind = []
Object.entries(filteredColors).forEach(([colorName, variations]) => {
    Object.entries(variations).forEach(([variation, hexCode]) => {
        const key = `${colorName}-${variation}`
        colorsForTailwind[key] = hexCode
    })
})

export default colorsForTailwind
