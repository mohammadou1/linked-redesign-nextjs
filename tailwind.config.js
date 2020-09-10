module.exports = {
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
   experimental: {
      applyComplexClasses: true,
   },
   purge: {
      content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   },
   theme: {
      extend: {
         colors: {
            'primary-light': '#0077b5',
            primary: '#0e6795',
         },
      },
   },
   variants: {},
   plugins: [],
};
