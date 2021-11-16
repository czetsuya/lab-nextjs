import {createTheme} from '@aws-amplify/ui';

// by default, createTheme extends the defaultTheme.
export const customAmplifyTheme = createTheme({
  name: 'amplifyTheme',
  tokens: {
    colors: {
      font: {
        primary: {value: '#1e2022'},
        secondary: {value: '#677788'}
      }
    }
  },
});