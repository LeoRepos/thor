import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google' 
import { GlobalStyle } from './themes/globalStyle';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/> 
      <Component {...pageProps} />
      <ToastContainer/>    
    </> 
  );
};
