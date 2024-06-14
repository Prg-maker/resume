/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{tsx,html}"],
  theme: {
    extend: {

      fontFamily:{
        'Inter' : ["Inter",'sans-serif'],
        'Mono' : ["Reddit Mono", 'monospace'],
        'Sans' : ["Open Sans",' sans-serif'],
      },
      keyframes:{
        widget:{
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
}

