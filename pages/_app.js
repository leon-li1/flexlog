import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }

  body {
    font-size: 24px;
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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
