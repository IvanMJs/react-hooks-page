import "../styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../components/theme/Theme";
import { Provider } from "react-redux";
import store from "../store/index"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
