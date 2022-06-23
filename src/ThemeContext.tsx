import React, { useState } from "react";
import { themes } from "./Theme";

const ThemeContext = React.createContext(themes.loblaws);

const ThemeStore = ({ children }: any) => {
  const [theme, setTheme] = useState(themes.loblaws); // line B - setting the initial theme

  const switchTheme = (theme: any) => setTheme(theme); // line C - changing the theme

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };
