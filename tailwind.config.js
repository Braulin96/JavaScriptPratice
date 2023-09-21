/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      custom: {
        square: {
          background: 'gray-200',
          width: '150px',
          aspectRatio: '1/1', // This is used to maintain aspect ratio
          borderRadius: 'xl',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
    },
  },
  plugins: [],
}
  }
}

