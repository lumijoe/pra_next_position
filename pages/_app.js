// pages/api/_app.js
// 全ページ共通表示

import '@/styles/globals.css';
import Header from 'components/header';
import Footer from 'components/footer';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} /> {/* 各ページの内容 */}
      <Footer />
    </div>
  )
  
}
