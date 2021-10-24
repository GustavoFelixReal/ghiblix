import { ButtonHTMLAttributes, ReactChild, ReactChildren, ReactNode } from "react";

import { StyledButton } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactChild | ReactChildren;
  rounded?: boolean;
  variant?: 'primary' | 'secondary' | 'success' |'danger' | 'warning' | 'info';
}

export default function Button({ children, ...rest }: ButtonProps) {

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
}