import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton, WithTooltip } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ outlineActive }, updateGlobals] = useGlobals();

  const toggleOutline = useCallback(
    () =>
      updateGlobals({
        outlineActive: !outlineActive,
      }),
    [outlineActive]
  );

  return (
    <WithTooltip
      placement="bottom"
      trigger="click"
      tooltipShown
      closeOnClick
      tooltip="hey"
      // children="none"
    >
      <IconButton
        key={TOOL_ID}
        active={outlineActive}
        title="Apply outlines to the preview"
        onClick={toggleOutline}
      >
        {/*
        Checkout https://next--storybookjs.netlify.app/official-storybook/?path=/story/basics-icon--labels
        for the full list of icons
      */}
        <Icons icon="outline" />
      </IconButton>
    </WithTooltip>
  );
};
