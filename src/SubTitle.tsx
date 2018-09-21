import React, { ReactNode } from "react";
import styled, { StyledProps } from "./styled";

interface Props extends StyledProps {
  children: ReactNode;
}

const SubTitle = ({ className, children }: Props) => (
  <h2 className={className}>{children}</h2>
);

const Styled = styled(SubTitle)`
  font-size: 1.5em;
  font-weight: bold;
  margin: 5px 0;
`;

export default Styled;
