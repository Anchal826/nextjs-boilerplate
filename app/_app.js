// _app.js
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service worker registered:', registration);
        })
        .catch(error => {
          console.error('Service worker registration failed:', error);
        });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
