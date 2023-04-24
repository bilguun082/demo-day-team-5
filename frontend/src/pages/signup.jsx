import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Input from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { useTheme } from "@/context/ThemeProvider";

const styles = {
  input: {
    width: "340px",
    height: "35px",
    borderRadius: "10px",
    fontFamily: "Mulish",
  },
};
const pic =
  "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/andre-benz-wkhyXI5hRbo-unsplash.jpg?alt=media&token=cbcbfc83-5023-44b0-84e1-50f1c1c2c2ba";

export const SignUp = () => {
  const { theme } = useTheme();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [check, setCheck] = useState("");
  const CreateUser = async () => {
    if (check === user.password) {
      console.log(user.username);
      try {
        const res = await axios.post("http://localhost:5555/user/create", {
          username: user.username,
          email: user.email,
          password: user.password,
        });
        console.log(res);
        navigate(`/login`);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
    }
  };
  //   const navigate = useNavigate();

  //   const { user, setUser, LoginFunc } = useContext(User);
  return (
    <Box
      sx={{
        backgroundImage: `url(${pic})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: {
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          xs: "column",
        },
        height: "90vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: { xl: "100%", lg: "100%", md: "100%", sm: "30%", xs: "30%" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xl: "0", lg: "0", md: "0", sm: "50px", xl: "50px" },
        }}
      >
        <Box
          sx={{
            fontSize: {
              xl: "50px",
              lg: "45px",
              md: "40px",
              sm: "30px",
              xs: "25px",
            },
            fontFamily: "Mulish",
          }}
        >
          Welcome to Streamer's world!
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            CreateUser();
          }}
          style={{
            width: "370px",
            height: "480px",
            backgroundColor: theme === "black" ? " #FFFFFF80" : "#00000080",
            borderRadius: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
              variant="h4"
            >
              Бүртгүүлэх
            </Typography>
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Хэрэглэгчийн нэр
            </Typography>
            <input
              placeholder="username"
              required
              style={styles.input}
              variant="outlined"
              color="neutral"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Цахим хаяг
            </Typography>
            <input
              placeholder="name@mail.domain"
              type="email"
              required
              style={styles.input}
              variant="outlined"
              color="neutral"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Нууц үг
            </Typography>

            <input
              placeholder="••••••••••"
              required
              type="password"
              variant="outlined"
              style={styles.input}
              color="neutral"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Нууц үг давтах{" "}
            </Typography>
            <input
              placeholder="••••••••••"
              required
              type="password"
              variant="outlined"
              style={styles.input}
              color="neutral"
              value={check}
              onChange={(e) => {
                setCheck(e.target.value);
              }}
            />
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <input type="checkbox" name="" id="" className="checkbox" />
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    marginBottom: "10px",
                    color: theme === "white" ? "white" : "black",
                  }}
                >
                  Намайг сана
                </Typography>
              </Box>
            </Box>
            <button
              type="submit"
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "blue",
                color: "white",
                fontFamily: "Mulish",
                borderRadius: "10px",
                border: "none",
                marginBottom: "10px",
              }}
            >
              Бүртгүүлэх
            </button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
