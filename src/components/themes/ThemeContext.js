import { createContext } from "react";

export const themes = {
  dark: "",
  light: "white-theme",
};

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
});
