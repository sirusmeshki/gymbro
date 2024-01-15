import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '960px',
            lg: '1200px',
            xl: '1440px',
            '2xl': '1760px',
            '3xl': '1920px',
        },
        extend: {
            transitionTimingFunction: {
                'transition-button': 'cubic-bezier(1,.42,.06,.79)',
            },
            colors: {
                lightGreen: '#C9E4DE',
                lightPurple: '#E0E6FF',
                lightBlue: '#CDE6FA',
                borderColor: '#000',
                // borderColor: "#f1f1f1",
            },
            boxborder: {
                //Borders
                rb: '0.5px 0.5px  0 0 #CCC',
                top: '0 -0.5px 0 0 #CCC',
                bottom: '0 0.5px 0 0 #CCC',
                right: '0.5px 0 0 0 #CCC',
                left: '-0.5px 0 0 0 #CCC',
            },
            width: {
                sidebar: '400px',
            },
            margin: {
                section: '400px',
            },
        },
    },
    plugins: [],
}
export default config
