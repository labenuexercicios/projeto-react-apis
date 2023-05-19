import '@/styles/globals.css';
import Container from '@/components/Container';
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
