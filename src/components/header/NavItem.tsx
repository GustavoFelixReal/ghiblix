import { useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import { SideBarActiveContext } from './sidebar/SideBar';

import Icon from '@mdi/react';
import Link from 'next/link';
import { StyledNavItem } from './styled';
import Tooltip from '../common/hovers/Tooltip';

interface NavItemProps {
  fullIcon: string;
  label: string;
  outlineIcon: string;
  path: string;
  size: number;

  onClick?: (args?: any) => void;
}

export default function NavItem({ path, label, outlineIcon, fullIcon, size, onClick }: NavItemProps) {
  const { asPath } = useRouter();

  const isListItemActive = asPath.split('?').shift() === path;
  const isSideBarActive = useContext(SideBarActiveContext);

  return (
    <StyledNavItem onClick={onClick} className={`${isSideBarActive && 'side-bar-active'}`}>
      <Link href={path}>
        <a className={`${isListItemActive && 'active'}`}>
          <Icon path={isListItemActive ? fullIcon : outlineIcon} size={size} />
          <span className="label-text">{label}</span>
        </a>
      </Link>

      <Tooltip>{label}</Tooltip>
    </StyledNavItem>
  );
}
