import '../styles/globals.css'

import { AmplifyProvider } from '@aws-amplify/ui-react';
import {awsConfig} from '../aws-export';
import Amplify from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
Amplify.configure(awsConfig);

function MyApp({ Component, pageProps }) {
  return (
      <AmplifyProvider>
        <Component {...pageProps} />
      </AmplifyProvider>
  );
}

export default MyApp
