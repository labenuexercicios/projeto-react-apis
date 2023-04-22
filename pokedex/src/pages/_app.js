import '@/styles/globals.css';
import Container from '@/components/Container';
import { GlobalContext } from '@/contexts/globalContext';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
    const [pageFlow, setPageFlow] = useState(1);
    return (
        <GlobalContext.Provider value={{ pageFlow, setPageFlow }}>
            <Container>
                <Component {...pageProps} />
            </Container>
        </GlobalContext.Provider>
    );
}
