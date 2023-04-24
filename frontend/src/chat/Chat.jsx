import { useState, useEffect, useContext, useRef } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import {
  Box,
  Typography,
  Button,
  Stack,
  Paper,
  Card,
  InputAdornment,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import StartIcon from "@mui/icons-material/Start";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useOutsideClick } from "@/hook/useOutsideClick";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Cookies from "js-cookie";

export const Chat = () => {
  const [exist, setExist] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");
  const [room, setRoom] = useState("");
  const containerRef = useRef(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const outsideClick = () => {
    setShowEmojis(false);
  };
  const emojiRef = useOutsideClick(() => outsideClick);

  useEffect(() => {
    const roomName = Cookies.get("room");
    setRoom(roomName);
    if (!roomName) return;
    const queryMessages = query(
      messagesRef,
      where("room", "==", roomName),
      orderBy("createdAt")
    );
    const unscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      console.log(messages);
      setMessages(messages);
    });
    return () => unscribe();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container !== null) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, exist]);

  const handleSubmit = (e) => {
    const username = Cookies.get("username");
    e.preventDefault();
    if (newMessage === "") {
      return;
    }
    addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: username,
      room: room,
    });

    setNewMessage("");
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setNewMessage(newMessage + emoji);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* <Typography sx={NameOfRoom}>{room}</Typography> */}

      {exist ? (
        <Box sx={{ maxWidth: 350 }}>
          <Paper
            elevation={3}
            sx={{ bgcolor: "rgb(24,24,27)", color: "white" }}
          >
            <Box
              sx={{
                display: "flex",
                p: 2,
                justifyContent: "space-between",
              }}
            >
              <StartIcon
                onClick={() => {
                  setExist(false);
                }}
                sx={{
                  "&:hover": { bgcolor: "rgb(47,47,53)" },
                  borderRadius: "5px",
                }}
              />
              <Typography sx={{ fontWeight: "bold", color: "white" }}>
                Live Chat
              </Typography>
            </Box>
            <Box
              sx={{ width: "100%", height: "2px", bgcolor: "rgb(38,38,43)" }}
            />

            <Box ref={containerRef} sx={ChatMessage}>
              {showEmojis && (
                <Box sx={{ position: "absolute", mt: 32 }}>
                  <Picker
                    data={data}
                    emojiSize={22}
                    emojiButtonSize={28}
                    onEmojiSelect={addEmoji}
                    maxFrequentRows={0}
                    width={100}
                    height={100}
                    noCountryFlags={true}
                  />
                </Box>
              )}
              {messages.map((message) => (
                <Card
                  key={message.id}
                  sx={{
                    mb: 1,
                    bgcolor: "rgb(24,24,27)",
                    color: "white",
                    boxShadow: "none",
                  }}
                >
                  <Stack spacing={1} direction="row">
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      {message.user}:
                    </Typography>
                    <Typography variant="body2">{message.text}</Typography>
                  </Stack>
                </Card>
              ))}
            </Box>

            <form onSubmit={handleSubmit} ref={emojiRef}>
              <Stack>
                <TextField
                  color="secondary"
                  placeholder="Send a message"
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                  InputProps={{
                    style: {
                      color: "white",
                      height: "44px",
                      width: "100%",
                      backgroundColor: "rgb(50,50,52)",
                    },
                    endAdornment: (
                      <InputAdornment disableTypography position="end">
                        <Box
                          sx={{
                            "&:hover": {
                              bgcolor: "red",
                            },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: 34,
                            height: 32,
                            borderRadius: 1,
                          }}
                        >
                          <InsertEmoticonIcon
                            sx={{
                              color: "white",
                            }}
                            onClick={() => setShowEmojis(!showEmojis)}
                          />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ size: "small" }}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
      ) : (
        <KeyboardReturnIcon
          onClick={() => {
            setExist(true);
          }}
          sx={{
            "&:hover": { bgcolor: "rgb(47,47,53)" },
            borderRadius: "5px",
          }}
        />
      )}
    </Box>
  );
};

const NameOfRoom = {
  width: "150px",
  height: "100px",
  bgcolor: "blue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ChatMessage = {
  maxHeight: 700,
  height: 700,
  overflowY: "scroll",
  px: 2,
  mb: 1,
  borderRadius: 1,
  color: "white",
  bgcolor: "rgb(24,24,27)",
};

export default Chat;
