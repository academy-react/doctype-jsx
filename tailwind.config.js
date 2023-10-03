/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      spacing: {
        '18': '4.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      colors: {
        primary: '#338D81',
        secondary: '#CCA349',
        'zgh' : '#CCA349',
        'daste' : '#F0F0F0',
        'course' : '#F0F0F0',
      },

      backgroundImage: {
        'line': "url('./line.svg')", 
      },

      backgroundSize: {
        '80': '80%', 
      },

      backgroundPosition: {
        'top-4': 'center top 8rem',
      },
    },
    fontFamily: {
      irSans: ['IranSans'],
    }
  },
  plugins: [],
}

