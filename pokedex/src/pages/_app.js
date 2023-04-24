import '@/styles/globals.css';
import Container from '@/components/Container';
import { GlobalContext } from '@/context/GlobalContext';
import { useState } from 'react';
import GlobalProvider from '@/context/GlobalProvider';

export default function App({ Component, pageProps }) {
    return (
        <GlobalProvider>
            <Container>
                <Component {...pageProps} />
            </Container>
        </GlobalProvider>
    );
}
