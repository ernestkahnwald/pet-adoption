import { extendTheme } from '@chakra-ui/react';

// Customize theme
// https://chakra-ui.com/docs/styled-system/customize-theme#theme-extension-withdefaultcolorscheme

// Component Style
// https://chakra-ui.com/docs/styled-system/component-style

export default extendTheme({
  components: {
    Button: {
      sizes: {
        sm: {
          fontWeight: '400',
        },
      },
    },
  },
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      600: '#FDB88F',
      900: '#1a202c',
    },
  },
});
