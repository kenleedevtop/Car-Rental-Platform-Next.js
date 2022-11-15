import React from 'react';
import { PageLoader } from 'components/core';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { RegisteredCache, SerializedStyles, StyleSheet } from '@emotion/utils';
import { DashboardLayout } from 'layouts';

import createEmotionCache from 'ssr/create-emotion-cache';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from 'theme';
import Head from 'next/head';
import { AppContextProvider } from 'context';

const clientSideEmotionCache = createEmotionCache();

type AppType = {
  Component: React.ElementType;
  pageProps: any;
  emotionCache: {
    inserted: { [key: string]: string | true };
    registered: RegisteredCache;
    sheet: StyleSheet;
    key: string;
    insert: (
      selector: string,
      serialized: SerializedStyles,
      sheet: StyleSheet,
      shouldCache: boolean
    ) => string | void;
  };
};

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppType) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <PageLoader />
        <AppContextProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </AppContextProvider>
      </ThemeProvider>
    </CacheProvider>
  </>
);

export default MyApp;
