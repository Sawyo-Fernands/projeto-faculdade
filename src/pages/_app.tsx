import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ["100" , "300" , "400" , "500" , "700" , "900"]
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
