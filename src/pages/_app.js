import "../app.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps}></Component>
    </>
  );
};

export default App;
