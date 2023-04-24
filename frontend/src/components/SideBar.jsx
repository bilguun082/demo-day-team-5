import { Box, Typography, Stack, Popover } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { Card } from "./card";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
export const SideBar = () => {
  const [appear, setAppear] = useState(true);

  return appear ? (
    <Box
      sx={{
        height: "100%",
        bgcolor: "rgb(31,31,35)",
        color: "white",
        padding: 2,
        width: "245px",
      }}
    >
      <Stack spacing={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "18px" }}>For You</Typography>

          <Box
            sx={{
              "&:hover": {
                bgcolor: "rgb(47,47,53)",
              },
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 35,
              height: 35,
            }}
          >
            <KeyboardReturnIcon
              sx={{ fontSize: "21px" }}
              onClick={() => {
                setAppear(false);
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "rgb(135,135,138)",
            }}
          >
            FOLLOWED CHANNELS
          </Typography>
          <Box
            sx={{
              width: 35,
              height: 35,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
            }}
          >
            <ImportExportIcon
              sx={{ fontSize: "23px", color: "rgb(135,135,138)" }}
            />
          </Box>
        </Box>
        <Stack spacing={1}>
          <Card />
          <Card />
        </Stack>
      </Stack>

      <Box sx={{ mt: 5 }}>
        <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
          RECOMMENDED CHANNELS
        </Typography>
      </Box>

      <Stack sx={{ mt: 1 }} spacing={1}>
        <Card />
        <Card />
        <Card />
      </Stack>
    </Box>
  ) : (
    <Box
      sx={{
        bgcolor: "rgb(31,31,35)",
        height: "100%",
        width: "50px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column  ",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          "&:hover": {
            bgcolor: "rgb(47,47,53)",
          },
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 35,
          height: 35,
          my: 1,
        }}
      >
        <StartIcon
          fontSize="small"
          onClick={() => {
            setAppear(true);
          }}
        />
      </Box>

      <FavoriteBorderIcon sx={{ mb: 1 }} />
      <Stack direction="column" spacing={1}>
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "red",
            height: "30px",
            width: "30px",
          }}
        />
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "white",
            height: "30px",
            width: "30px",
          }}
        />
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "blue",
            height: "30px",
            width: "30px",
          }}
        />
      </Stack>
    </Box>
  );
};
