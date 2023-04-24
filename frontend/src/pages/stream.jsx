import { Box, createTheme, ThemeProvider } from "@mui/material";
import UserCard from "@/components/userCard";
import { About } from "@/components/about";
import Chat from "@/chat/Chat";
import ShareScreen from "@/components/screenshare";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1250,
      xl: 1750,
      customLg: 1400,
      customXl: 1980,
    },
  },
});

export const VideoPage = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "80vw",
          }}
        >
          <ShareScreen />
          <UserCard />
          <About />
        </Box>
        <Box>
          <Chat />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default VideoPage;
