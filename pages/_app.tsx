import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Breketmax Portfolio</title>
      <meta name="description" content="Личный сайт того самого breketmax'a, да-да не удивляйтесь." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
