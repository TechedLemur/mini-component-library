import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 16,
    paddingLeft: 16 + 8,
    paddingTop: 8,
    fontSize: 14,
  },
  large: {
    iconSize: 24,
    paddingLeft: 24 + 12,
    paddingTop: 8,
    fontSize: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const { iconSize, paddingLeft, fontSize, paddingTop } = STYLES[size];

  return (
    <Wrapper>
      <IconWrapper id={icon} size={iconSize} />
      <InputWrapper
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--padding-left": paddingLeft + "px",
          "--padding-top": paddingTop + "px",
          "--padding-bottom": paddingTop - 1 + "px",
          "--font-size": fontSize + "px",
        }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
      <Underline />
    </Wrapper>
  );
};

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  height: 1px;
  width: 100%;
  background-color: black;
  border-radius: 1px;
`;

const InputWrapper = styled.input`
  color: ${COLORS.gray700};
  font-weight: 700;
  border: none;
  padding-left: var(--padding-left);
  padding-top: var(--padding-top);
  padding-bottom: var(--padding-bottom);
  width: var(--width);
  font-size: var(--font-size);
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  color: ${COLORS.gray700};
  pointer-events: none;
`;

const Wrapper = styled.div`
  width: max-content;
  position: relative;
  &:hover ${InputWrapper} {
    color: black;
  }
  &:hover ${IconWrapper} {
    color: black;
  }
`;
export default IconInput;
