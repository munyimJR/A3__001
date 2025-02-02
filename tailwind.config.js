const plugin = require('tailwindcss/plugin')

module.exports = {
  // ...
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.card': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
          borderColor: theme('colors.orange.500'), // Corrected to use Tailwind color for orange
          borderWidth: '1px', // Added border width for visibility
        }
      })
    })
  ]
}
