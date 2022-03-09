const colors = require('tailwindcss/colors')
const excludedProperties = ['inherit', 'current', 'transparent', 'black', 'white', 'lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

for (const property of excludedProperties) {
    delete colors[property]
}

let formattedColors = {}

for (const [color, variations] of Object.entries(colors)) {
    for (const [code, v] of Object.entries(variations)) {
        const key = `${color}-${code}`
        formattedColors[key] = v
    }
}

export default formattedColors
