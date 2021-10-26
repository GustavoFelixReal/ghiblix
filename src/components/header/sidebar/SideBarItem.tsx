import { useContext } from 'react';
import { useRouter } from 'next/dist/client/router';
import { SideBarActiveContext } from './SideBar';

import Icon from '@mdi/react';
import Link from 'next/link';
import { StyledSideBarItem } from '../styled';
import Tooltip from '../../common/hovers/Tooltip';

interface SideBarItemProps {
  fullIcon: string;
  label: string;
  outlineIcon: string;
  path: string;
  size: number;
}

export default function SideBarItem({ path, label, outlineIcon, fullIcon, size }: SideBarItemProps) {
  const { asPath } = useRouter();

  const isListItemActive = asPath.split('?').shift() === path;
  const isSideBarActive = useContext(SideBarActiveContext);

  return (
    <StyledSideBarItem className={`${isSideBarActive && 'side-bar-active'}`}>
      <Link href={path}>
        <a className={`${isListItemActive && 'active'}`}>
          <Icon path={isListItemActive ? fullIcon : outlineIcon} size={size} />
          <span className="label-text">{label}</span>
        </a>
      </Link>

      <Tooltip>{label}</Tooltip>
    </StyledSideBarItem>
  );
}
