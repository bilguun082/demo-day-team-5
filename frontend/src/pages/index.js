import Head from "next/head";
import { Box, Button, Typography } from "@mui/material";
// import { SideBar } from "@/components/SideBar";
import Carousel from "@/components/Carousel";
import { useEffect } from "react";
import { useTheme } from "@/context/ThemeProvider";
// import { VideoPage } from "./videoPage";
// import { About } from "@/layout/about";

export default function Index() {
  const { theme, changeTheme } = useTheme();

  return (
    <Box>
      <Head>
        <title>Live Stream</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "90vh",
          width: "100vw",
          backgroundColor: theme === "white" ? "black" : "white",
        }}
      >
        {theme}
        <Button onClick={changeTheme}>ChangeTheme</Button>
        {/* <SideBar /> */}
        <Box
          sx={{
            width: {
              xl: "85vw",
              lg: "88vw",
              md: "95vw",
              sm: "95vw",
              xs: "95vw",
            },
          }}
        >
          <Carousel />
        </Box>
      </Box>
      {/* <Box>
        <VideoPage />
      </Box> */}
    </Box>
  );
}