import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../theme/globalStyle";
import { dark } from "../theme/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
