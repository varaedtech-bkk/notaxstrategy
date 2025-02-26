import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent';
import LiveChat from '../components/LiveChat';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
      <LiveChat />
    </>
  )
}

export default MyApp;