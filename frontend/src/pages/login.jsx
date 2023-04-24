import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeProvider";

const styles = {
  family: {
    fontFamily: "Mulish",
    marginBottom: "10px",
  },
  input: {
    width: "340px",
    height: "35px",
    borderRadius: "10px",
    fontFamily: "Mulish",
  },
};

export const Login = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const LoginFunc = async () => {
    try {
      const res = await axios.post(`http://localhost:5555/user/login`, {
        username: user.username,
        password: user.password,
      });
      console.log(res);
      if (res.data.match === true) {
        Cookies.set("token", res.data.token);
        Cookies.set("username", res.data.username);
        // setUser(res.data.email);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      alert("Password or Email is invalid");
    }
  };

  return (
    // <div>hii</div>
    <Box
      sx={{
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/andre-benz-wkhyXI5hRbo-unsplash.jpg?alt=media&token=cbcbfc83-5023-44b0-84e1-50f1c1c2c2ba)`,
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
          Welcome Back Streamer!
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
            LoginFunc();
          }}
          style={{
            width: "370px",
            height: "400px",
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
              Нэвтрэх
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
            <   
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
            <Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <input type="checkbox" name="" id="" className="checkbox" />
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: theme === "white" ? "white" : "black",
                  }}
                >
                  Намайг сана
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  marginBottom: "10px",
                  color: theme === "white" ? "white" : "black",
                }}
              >
                <a
                  href="/"
                  style={{ color: theme === "white" ? "white" : "black" }}
                >
                  Нууц үг мартсан
                </a>
              </Typography>
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
              Нэвтрэх
            </button>
            <Typography
              sx={{
                fontFamily: "Mulish",
                marginBottom: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              <a
                href="/signup"
                style={{
                  color: theme === "white" ? "white" : "black",
                  textDecoration: "underline",
                }}
              >
                Шинэ хэрэглэгч бол энд дарна уу
              </a>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
