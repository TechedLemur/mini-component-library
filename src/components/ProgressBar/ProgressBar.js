/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  let WrapperTag = WrapperMedium;
  const BarTag = size === "large" ? BarLarge : BarBase;

  if (size === "small") {
    WrapperTag = WrapperSmall;
  } else if (size === "large") {
    WrapperTag = WrapperLarge;
  }

  const WIDTH = 370;
  // const progress = (value / 100) * WIDTH;
  const edgeRadius = value < 99 ? 0 : 4 * (1 - (100 - value));
  return (
    <>
      <span id="loadinglabel">Loading: </span>

      <WrapperTag
        style={{
          "--width": `${WIDTH}px`,
        }}
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
      >
        <BarTag
          style={{
            "--value": value,
            "--edge-radius": `${edgeRadius}px`,
          }}
        >
          <VisuallyHidden>{`Progress is ${value}%`}</VisuallyHidden>
        </BarTag>
      </WrapperTag>
    </>
  );
};

const WrapperMedium = styled.span`
  position: relative;
  display: inline-block;
  background-color: ${COLORS.transparentGray15};
  padding: 4px;
  border-radius: 4px;
  /* border: solid; */
  width: var(--width);
  height: 12px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const WrapperSmall = styled(WrapperMedium)`
  height: 8px;
`;
const WrapperLarge = styled(WrapperMedium)`
  height: 24px;
`;

const BarBase = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  border-top-right-radius: var(--edge-radius);
  border-bottom-right-radius: var(--edge-radius);
  /* border: solid; */
  display: inline-block;
  background-color: ${COLORS.primary};
  width: calc(var(--value) * 1%);
  height: inherit;
`;

const BarLarge = styled(BarBase)`
  height: 16px;
  top: 4px;
  left: 4px;
  right: 4px;
  width: calc(var(--value) * 1% - var(--value) / 100 * 8px);
`;

export default ProgressBar;
