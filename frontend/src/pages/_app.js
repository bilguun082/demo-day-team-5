import ThemeProvider from "@/context/ThemeProvider";
import "@/styles/globals.css";
import { Header } from "@/layouts/header";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Box>
        <Header />
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
