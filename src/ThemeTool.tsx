import React, { useCallback, useState, useEffect, useContext } from "react";
import { useGlobals, API } from "@storybook/api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import { ADDON_ID } from "./constants";
import addons, { types, makeDecorator } from "@storybook/addons";
import { FORCE_RE_RENDER } from "@storybook/core-events";
// import { ThemeProvider } from "styled-components";
import { themes, themesList } from "./Theme";
import { ThemeContext, ThemeStore } from "./ThemeContext";
// import { Theme } from "./Theme";

import { ThemeIcon } from "./ThemeIcon";
import { ThemeProvider } from "styled-components";
import { ChakraProvider } from "@chakra-ui/react";

// // Register the addon
// addons.register(ADDON_ID, () => {
//   // Register the tool
//   addons.add(ADDON_ID, {
//     title: "theme-switcher",
//     type: types.TOOL,
//     match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
//     render: () => <ThemeTool api={api} />,
//     // render: ThemeTool,
//   });
// });

export const withTheme = makeDecorator({
  name: "withTheme",
  parameterName: "theme",
  skipIfNoParametersOrOptions: false,
  wrapper: (Story: any) => (
    <ThemeContext.Consumer>
      {(theme) => (
        <ChakraProvider theme={themesList[theme]}>
          <Story />
          {console.log(theme, "this is the theme")}
        </ChakraProvider>
      )}
    </ThemeContext.Consumer>
  ),
});

export interface ThemeToolProps {
  api: API;
  //   theme: string;
  //   rerender: boolean,
}

export const ThemeTool = () => {
  const [{ outlineActive }, updateGlobals] = useGlobals();
  const [activeTheme, setTheme] = useState("loblaws"); //import context onClick update the themeProvider
  const [expanded, setExpanded] = useState(false);
  //  const [{theme, switchTheme] = useContext(ThemeContext);

  const toggleOutline = useCallback(
    () =>
      updateGlobals({
        outlineActive: !outlineActive,
      }),
    [outlineActive]
  );

  const themeList = ["loblaws", "chakra", "rcss"].map((i) => ({
    id: i,
    title: i,
    onClick: () => {
      setTheme(i);
    },
    right: <ThemeIcon background="red" />,
  }));

  return (
    <ThemeContext.Provider value={activeTheme}>
      {/* <Theme> */}
      <WithTooltip
        placement="top"
        trigger="click"
        tooltipShown={expanded}
        onVisibilityChange={(s) => setExpanded(s)}
        tooltip={<TooltipLinkList links={themeList} />}
        closeOnClick
      >
        <IconButton
          key={ADDON_ID}
          active={outlineActive}
          title="This is the theme switcher"
          onClick={toggleOutline}
        >
          {activeTheme}
          <Icons icon="paintbrush" style={{ marginLeft: "5px" }} />
        </IconButton>
      </WithTooltip>
      {/* </Theme> */}
    </ThemeContext.Provider>
  );
};

// create a context
// pass values in the theme provider
// values - theme, changeThemeHandler
