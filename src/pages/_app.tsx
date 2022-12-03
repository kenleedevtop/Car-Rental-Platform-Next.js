import React, { useState } from 'react';
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
import { QueryClient, QueryClientProvider } from 'react-query';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip
);

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
}: AppType) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
