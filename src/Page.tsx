import React, { ReactNode } from "react";
import styled, { StyledProps } from "./styled";

interface Props extends StyledProps {
  children: ReactNode;
}

const Page = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
);

const Styled = styled(Page)`
  min-height: 100vh;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  font-size: 16px;
  background-color: #252526;
  color: #cccccc;
`;

export default Styled;
