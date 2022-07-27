import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import Layout from '../components/layout/Layout';
import { CharacterProvider } from '../contexts/CharacterContext';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ToastContainer />
    <CharacterProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CharacterProvider>
  </>
}

export default MyApp;