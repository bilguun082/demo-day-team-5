import { useState, useRef, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

import { Box, Typography, Button } from "@mui/material";

export const ChatApp = () => {
  // const [room, setRoom] = useState(null);
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const CreateStream = async () => {
    try {
      const res = await axios.post("http://localhost:5555/stream/createRoom", {
        roomName: roomName,
      });
      console.log(res);
      Cookies.set("room", res?.data?.data?.roomName);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const roomInputRef = useRef(null);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
          height: "20%",
        }}
      >
        <Typography>Create Stream</Typography>
        {/* <form
          onSubmit={(e) => {
            e.preventDefault();
            CreateStream();
          }}
        > */}
        <input
          // ref={roomInputRef}
          sx={{ color: "white" }}
          value={roomName}
          onChange={(e) => {
            setRoomName(e.target.value);
          }}
        />
        <Button
          variant="primary"
          onClick={() => {
            // setRoom(roomInputRef.current.value);
            // console.log(room);
            router.push("/stream");
            CreateStream();
          }}
        >
          Start Stream
        </Button>
        {/* </form> */}
      </Box>
    </Box>
  );
};

export default ChatApp;
