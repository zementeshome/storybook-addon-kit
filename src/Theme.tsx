import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { extendTheme } from "@chakra-ui/react";

export const themes = {
  loblaws: {
    name: "loblaws",
    color: "#E1251B",
    background: "#000",
  },
  rcss: {
    name: "rcss",
    color: "#194B9F",
    background: "#FF69B4",
  },
  chakra: {
    name: "chakra",
    color: "#FF69B4",
    background: "#808080",
  },
};

export const chakra = extendTheme({
  styles: {
    global: {
      body: {
        color: "hotpink",
        bg: "#808080",
      },
    },
  },
});

export const rcss = extendTheme({
  styles: {
    global: {
      body: {
        color: "#194B9F",
        bg: "#FF69B4",
      },
    },
  },
});

export const loblaws = extendTheme({
  styles: {
    global: {
      body: {
        color: "#E1251B",
        bg: "#000",
      },
    },
  },
});

export const themesList = [chakra, rcss, loblaws];

//   // const switchTheme = (theme: any) => setTheme(theme); // li

// export const Theme = ({ children, switchTheme }: any) => {
//   const { theme } = useContext(ThemeContext);

//   return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
// };

// export const ThemeContext = React.createContext(
//   themes.loblaws // default value
// );

// // Provider
// export const ThemeProvider = ({ children })  =>  {
//     const  [toggle, setToggle] = React.useState(false);
//     const toggleFunction =  ()  =>  {
//     setToggle(!toggle);
// };
// return  (
//     <ThemeContext.Provider value={{ toggle, toggleFunction }}>
//         {children}
//     </ThemeContext.Provider>
//     );
