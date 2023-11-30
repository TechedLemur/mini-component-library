import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <Wrapper>
        {displayedValue}
        <Arrow id="chevron-down" />
        <InvisibleSelect value={value} onChange={onChange}>
          {children}
        </InvisibleSelect>
      </Wrapper>
    </>
  );
};

const Arrow = styled(Icon)`
  position: absolute;
  right: 8px;
  top: 10px;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  height: 43px;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  font-size: 1rem;
  min-width: 0;
  border: none;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InvisibleSelect = styled.select`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: inherit;
`;
export default Select;
