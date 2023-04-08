import '@/styles/globals.css';
import Container from '@/components/Container';

export default function App({ Component, pageProps }) {
    return (
        <Container>
            <Component {...pageProps} />
        </Container>
    );
}
