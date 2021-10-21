import { ButtonHTMLAttributes, ReactChild, ReactChildren, ReactNode } from "react";

import { StyledButton } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactChild | ReactChildren;
}

export default function Button({ children, ...rest }: ButtonProps) {

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )

}