import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import React from 'react';

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return <>
        <Head>
            <title>МойТоп - лучий топ</title>
            <meta name="description" content="МойТоп - рейтинг компаний"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"/>

        </Head>
        <Component {...pageProps} />
    </>
        ;
}

export default MyApp;
