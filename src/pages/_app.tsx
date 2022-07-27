import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import Layout from '../components/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  )
}