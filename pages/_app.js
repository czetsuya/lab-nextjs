import '../styles/globals.css'

import { AmplifyProvider } from '@aws-amplify/ui-react';
import {awsConfig} from '../aws-export';
import Amplify from 'aws-amplify';
Amplify.configure(awsConfig);
import {customAmplifyTheme} from '../theme/amplify'

function MyApp({ Component, pageProps }) {
  return (
      <AmplifyProvider theme={customAmplifyTheme}>
        <Component {...pageProps} />
      </AmplifyProvider>
  );
}

export default MyApp
