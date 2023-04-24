import {
  Box,
  Typography,
  Button,
  Container,
  createTheme,
  ThemeProvider,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Grid,
} from "@mui/material";

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

const st = {
  fontSize: { xs: "14px", lg: "16px" },
};
export const About = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            bgcolor: "rgb(24,24,27)",
            width: "861px",
            color: "white",
            padding: 5,
            display: "flex",
            flexDirection: { xs: "column", lg: "column", xl: "row" },
            justifyContent: "space-between",
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h5">About User</Typography>
            <Typography>followers</Typography>
            <Typography>About</Typography>
          </Stack>

          <Box sx={{ display: { xs: "block", lg: "block", xl: "none" } }}>
            <Box
              sx={{ width: "100%", height: "1px", bgcolor: "grey", mt: "14px" }}
            ></Box>
          </Box>

          <Stack
            direction={{ md: "row", xl: "column" }}
            sx={{ mt: "14px" }}
            spacing={{ xs: 2, lg: 2, xl: 0 }}
          >
            <Typography sx={st}>@ESLCS</Typography>
            <Typography sx={st}>@ESLCS</Typography>
            <Typography sx={st}>@eslcounterstrike</Typography>
            <Typography sx={st}>/ESLCS</Typography>
            <Typography sx={st}>pro.eslgaming.com</Typography>
          </Stack>
        </Card>
      </Box>
    </ThemeProvider>
  );
};
