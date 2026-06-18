import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layouts/Layout';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={plusJakartaSans.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
