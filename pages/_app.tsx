import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>МойТоп - лучий топ</title>
            <meta name="description" content="МойТоп - рейтинг компаний" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </>;
}

export default MyApp;
