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
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Notifications from "@mui/icons-material/Notifications";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IosShareIcon from "@mui/icons-material/IosShare";

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

const but = {
  px: 1,
  py: 0,
  bgcolor: "pink",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "7px",
};
export const UserCard = () => {
  const random = () => Math.floor(Math.random() * 255);

  const st = {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    border: "2px solid",
    borderColor: `rgb(${random()}, ${random()}, ${random()})`,
    "&:hover": {
      bgcolor: "red",
    },
  };

  const [isLiked, setIsLiked] = useState(false);
  const [isNot, setIsNot] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked(true);
  };
  const handleMouseLeave = () => {
    setIsLiked(false);
  };

  const handleNot = () => {
    setIsNot(true);
  };
  const handleNotLeave = () => {
    setIsNot(false);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        <Stack direction="row" spacing={2}>
          <Box
            component="img"
            sx={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              border: "2px solid",
              borderColor: `rgb(${random()}, ${random()}, ${random()})`,
              "&:hover": {
                border: "4px solid",
                borderColor: `rgb(${random()}, ${random()}, ${random()})`,
              },
            }}
            alt="img"
            src="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/06/How-Valorant-Ranking-System-Works-Rankings-Explained.png?resize=302%2C190&ssl=1"
          />
          <Card sx={{ maxWidth: "300px", bgcolor: "black", color: "white" }}>
            <CardContent sx={{ padding: 0 }}>
              <Box>
                <Typography variant="h6">Streamer</Typography>
              </Box>
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                Name
              </Typography>
              <Typography>Category</Typography>
            </CardContent>
          </Card>
        </Stack>

        <Box>
          <Stack direction="row" spacing={1}>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Box
                sx={{
                  "&:hover": {
                    bgcolor: "rgb(47,47,53)",
                  },
                  borderRadius: "7px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "34px",
                  px: 1,
                }}
              >
                <AddReactionIcon />
                <Typography sx={{ ml: 1 }}>React</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                bgcolor: "rgb(47,47,53)",
                width: "90px",
                height: "34px",
                borderRadius: "7px",
                "&: hover": {
                  bgcolor: "red",
                  transition: "0.4s",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={handleLikeToggle}
              onMouseLeave={handleMouseLeave}
            >
              {isLiked ? (
                <HeartBrokenIcon fontSize="medium" />
              ) : (
                <FavoriteIcon fontSize="small" />
              )}

              <Typography sx={{ ml: 1, fontSize: { xs: "13px", sm: "15px" } }}>
                Follow
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Box
                sx={{
                  bgcolor: "rgb(47,47,53)",
                  borderRadius: "7px",
                  "&: hover": {
                    bgcolor: "red",
                    transition: "0.4s",
                  },
                  width: "40px",
                  height: "34px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onMouseEnter={handleNot}
                onMouseLeave={handleNotLeave}
              >
                {isNot ? (
                  <NotificationsOffIcon fontSize="medium" />
                ) : (
                  <Notifications fontSize="small" />
                )}
              </Box>
            </Box>
          </Stack>

          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Stack direction="row" spacing={1}>
              <Box>
                <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                  Viewer
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                  Time
                </Typography>
              </Box>
              <IosShareIcon fontSize="medium" />
              <MoreVertIcon fontSize="medium" />
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default UserCard;
