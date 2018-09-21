import React, { ReactNode } from "react";
import styled, { StyledProps } from "./styled";

interface Props extends StyledProps {
  children: ReactNode;
}

const Title = ({ className, children }: Props) => (
  <h1 className={className}>{children}</h1>
);

const Styled = styled(Title)`
  font-size: 2em;
  font-weight: bold;
  margin: 10px 0;
`;

export default Styled;
