import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ["100" , "300" , "400" , "500" , "700" , "900"]
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <Component {...pageProps} />
    </main>
  )
}
