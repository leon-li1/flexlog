import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }

  body {
    font-size: 24px;
    background: linear-gradient(0deg, #00316C 0%, #001630 119.43%), #00244E;
  }

  h1, h2, h3, h4, p, span {
    font-size: 1em;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  :not(h1):not(h2):not(h3) {
    font-weight: 300;
  }

  ::-webkit-scrollbar {
  width: 8px;
  background-color: white;
  border-radius: 100px;
  -webkit-border-radius: 100px;
}

/* ::-webkit-scrollbar-thumb:vertical {
  background: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 100px;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb:vertical:active {
  background: rgba(0, 0, 0, 0.61);
  -webkit-border-radius: 100px;
  border-radius: 100px;
} */

`;

const theme = {
  colors: {
    background1: "linear-gradient(0deg, #00316C 0%, #001630 119.43%), #00244E",
    background2: "#0c3360",
    background3: "#00244e",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
