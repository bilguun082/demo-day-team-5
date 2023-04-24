import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import Switch from "@mui/material/Switch";
import { useTheme } from "@/context/ThemeProvider";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";

const label = { inputProps: { "aria-label": "Switch demo" } };

const styles = {
  textTrans: {
    textTransform: "capitalize",
    color: "white",
    backgroundColor: "blue",
    fontFamily: "Mulish",
    marginLeft: "10px",
  },
  Box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const CreateRoom = async () => {
  try {
    const username = Cookies.get("username");
    const res = await axios.post(`http://localhost:5555/stream/createRoom`, {
      username: username,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Header = () => {
  const router = useRouter();
  const EnterRoom = async () => {
    try {
    } catch (error) {}
  };
  const [username, setUsername] = useState("");
  useEffect(() => {
    const getUsername = () => {
      const user = Cookies.get("username");
      setUsername(user);
    };
    getUsername();
  }, []);

  const { theme, changeTheme } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const logo =
    "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/Screen%20Shot%202023-04-21%20at%2017.51.35.png?alt=media&token=a050a1d0-a4af-4527-af11-e0ea2474ed94";
  const logoWhite =
    "https://firebasestorage.googleapis.com/v0/b/chatapp-e944a.appspot.com/o/Screen%20Shot%202023-04-21%20at%2017.53.30_auto_x2.jpg?alt=media&token=fbe70ac0-3908-43ec-a6b7-267c3200f220";

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      sx={{ backgroundColor: theme === "white" ? "black" : "white" }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        backgroundColor: theme === "white" ? "black" : "white",
        color: theme === "white" ? "white" : "black",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <SearchIcon />
        </IconButton>
        <p>Browse</p>
      </MenuItem>
      {username ? (
        <Box>
          <MenuItem
            onClick={() => {
              CreateRoom();
              router.push("/LiveStream");
            }}
          >
            <p>Create Room</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Box>
      ) : (
        <Box>
          <MenuItem
            onClick={() => {
              router.push("/login");
            }}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <LoginIcon />
            </IconButton>
            <p>Log In</p>
          </MenuItem>
          <MenuItem
            onClick={() => {
              router.push("/signup");
            }}
          >
            <IconButton size="large" color="inherit">
              <AddIcon />
            </IconButton>
            <p>Sign Up</p>
          </MenuItem>
        </Box>
      )}
    </Menu>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: theme === "white" ? "black" : "white",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Toolbar>
          <Box sx={styles.Box}>
            <Box
              onClick={() => {
                router.push("/");
              }}
            >
              {theme === "black" ? (
                <img src={logoWhite} alt="pice" width={120} height={25} />
              ) : (
                <img src={logo} alt="pice" width={120} height={30} />
              )}
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                fontFamily: "Mulish",
                marginLeft: "20px",
                marginRight: "10px",
                color: theme === "white" ? "white" : "black",
              }}
            >
              Browse
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search
            sx={{
              marginLeft: "20px",
              backgroundColor: theme === "white" ? "black" : "white",
              color: theme === "white" ? "white" : "black",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ fontFamily: "Mulish" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Switch
            {...label}
            defaultChecked
            onClick={() => {
              changeTheme();
            }}
          />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {username ? (
              <Box
                sx={{
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  marginLeft: "20px ",
                }}
              >
                <Typography>{username}</Typography>
                <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    CreateRoom();
                    router.push("/startStream");
                  }}
                >
                  Create Room
                </Button>
                <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    EnterRoom();
                    router.push("StartStream");
                  }}
                ></Button>
              </Box>
            ) : (
              <Box>
                <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  sx={styles.textTrans}
                  variant="contained"
                  onClick={() => {
                    router.push("/login");
                  }}
                >
                  Log in
                </Button>
              </Box>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{
                color: theme === "black" ? "black" : "white",
              }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
