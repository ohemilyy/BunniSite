import '/styles/globals.css';
import Head from '/components/Root/Head';
import Body from '/components/Root/Body';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

/* NProgress */
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import { Router } from 'next/dist/client/router';
Router.events.on('routeChangeStart', () => {
  NProgress.start()
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
});
Router.events.on('routeChangeError', () => {
  NProgress.done()
});
/* NProgress */

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Analytics />
      <Body>
        <Component {...pageProps} />  
      </Body>
    </>
  );
}

export default MyApp
