import { ReactChild, ReactChildren, ReactNode } from "react";
import { ButtonGroupContainer } from "./styled";

interface ButtonGroupProps {
  children: ReactNode | ReactChild | ReactChildren;
  className?: string;
}

export default function ButtonGroup({ children, ...rest }: ButtonGroupProps) {
  return (
    <ButtonGroupContainer {...rest}>
      {children}
    </ButtonGroupContainer>
  )
}