import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout';
import theme from '../theme';
import GlobalStyle from '../theme/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
                <GlobalStyle />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp;