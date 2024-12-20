import type { Config } from 'tailwindcss'
// import Colors from "#tailwind-config/theme/colors"
import Colors from "tailwindcss/colors"
export default <Partial<Config>>{
 darkMode: "class", // TODO mmmm
 theme: {
  extend: {
   aspectRatio: {
    auto: 'auto',
    square: '1 / 1',
    video: '16 / 9'
   },
   fontFamily: {
    "sans": ["Poppins", 'sans-serif'] // main font
   },
   colors: {
    background: "hsl(var(--background))",
    main: {
     DEFAULT: Colors.blue[800],
     foreground: "#1E2022",
    },
    shark: {
     50: '#f6f6f6',
     100: '#e7e7e7',
     200: '#d1d1d1',
     300: '#b0b0b0',
     400: '#888888',
     500: '#6d6d6d',
     600: '#5d5d5d',
     700: '#4f4f4f',
     800: '#454545',
     900: '#3d3d3d',
     950: '#1e1e1e',
    },
   },
   screens: {
    // mobileMedium: 375,
    // mobileWide: 425,
    /**@optional */
    // xs: "375px" //mobileMedium
   }
  }
 },
 content: [
  'docs/content/**/*.md'
 ]
}
