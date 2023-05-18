import '@styles/globals.scss'
import type {AppProps} from 'next/app'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

export default function App({Component, pageProps}: AppProps) {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const theme = createTheme({
    direction: 'rtl',
  });

  return <>
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </>
}
