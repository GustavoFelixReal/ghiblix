import { ReactChild, ReactChildren, ReactNode } from 'react';

import { TooltipContainer } from './styled';

interface TooltipProps {
  children: ReactNode | ReactChild | ReactChildren;
}

export default function Tooltip({ children }: TooltipProps) {
  return <TooltipContainer className="tooltip">{children}</TooltipContainer>;
}
