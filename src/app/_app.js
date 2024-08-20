// pages/_app.js
import '../styles/globals.css';
import { AudioProvider } from '../context/AudioContext';

function MyApp({ Component, pageProps }) {
  return (
    <AudioProvider>
      <Component {...pageProps} />
    </AudioProvider>
  );
}

export default MyApp;