import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("white");

  const [username, setUsername] = useState("");

  const colorModeHander = () => {
    setTheme((prev) => (prev === "white" ? "black" : "white"));
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: colorModeHander,
        username: username,
        setUsername: setUsername,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
