const colors = require('tailwindcss/colors')

module.exports = {
    important: true,
    content: [
        './public/index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}'
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.indigo,
            },
            zIndex: {
                '-1': '-1'
            },
            flexGrow: {
                5: '5'
            },
            maxHeight: {
                'screen-menu': 'calc(100vh - 3.5rem)',
                modal: 'calc(100vh - 160px)'
            },
            transitionProperty: {
                position: 'right, left, top, bottom, margin, padding',
                textColor: 'color'
            },
            keyframes: {
                fadeOut: {
                    from: {opacity: 1},
                    to: {opacity: 0}
                },
                fadeIn: {
                    from: {opacity: 0},
                    to: {opacity: 1}
                },
                spin: {
                    from: {rotate: 0},
                    to: {rotate: 360}
                }
            },
            animation: {
                fadeOut: 'fadeOut 250ms ease-in-out',
                fadeIn: 'fadeIn 250ms ease-in-out',
                spin: 'spin 1s linear infinite'
            },
            plugins: []
        }
    }
}
