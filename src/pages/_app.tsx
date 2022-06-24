import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Theme } from '@twilio-paste/core/theme';
import { Provider } from 'react-redux';
import { appStore } from '../store/appStore';
import { configureApplication } from '../store/appConfigSlice';
import { Layout } from '../components/Layout';

export const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    appStore.dispatch(configureApplication(window.appConfig));
  }, []);

  return (
    <>
      <Head>
        <title>TWSG Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={appStore}>
        <Theme.Provider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme.Provider>
      </Provider>
    </>
  );
};

export default MyApp;
