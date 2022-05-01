import React from 'react';

import { Layout } from '../components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      // Component = The component user is currently on
      <Component {...pageProps} />
    </Layout> 
  )
}

export default MyApp
