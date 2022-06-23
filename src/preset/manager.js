import React from "react";
import { addons, types } from "@storybook/addons";
import { ADDON_ID } from "../constants";
import { ThemeTool } from "../ThemeTool";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(ADDON_ID, {
    title: "theme-switcher",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    // render: () => <ThemeTool api={api} />,
    render: ThemeTool,
  });
});
