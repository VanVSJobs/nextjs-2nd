import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>Made with love from Van</p>
      </footer>
    </div>
  );
}

export default MyApp;
