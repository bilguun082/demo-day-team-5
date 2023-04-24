import { Box, Typography, Stack } from "@mui/material";

export const Card = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            bgcolor: "white",
            height: "30px",
            width: "30px",
          }}
        />

        <Stack spacing={-0.3}>
          <Typography sx={{ fontSize: "14px" }}>Channel</Typography>
          <Typography sx={{ fontSize: "13px" }}>Game</Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={0.4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "8px",
            height: "8px",
            bgcolor: "red",
            borderRadius: "50%",
          }}
        />
        <Typography sx={{ fontSize: "13px" }}>312</Typography>
      </Stack>
    </Box>
  );
};

export default Card;
