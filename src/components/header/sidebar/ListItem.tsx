
import { useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { SideBarActiveContext } from "./SideBar";

import Icon from "@mdi/react";
import Link from 'next/link';
import { StyledListItem } from "../styled";
import Tooltip from "../../common/hovers/Tooltip";

interface ListItemProps {
  fullIcon: string;
  label: string;
  outlineIcon: string;
  path: string;
  size: number;

  onClick?: (args?: any) => void;
};

export default function ListItem({ path, label, outlineIcon, fullIcon, size, onClick }: ListItemProps) {
  const { asPath } = useRouter();

  const isActive = asPath.split('?').shift() === path;
  const isSideBarActive = useContext(SideBarActiveContext);

  return (
    <StyledListItem 
      onClick={onClick} 
      isActive={isActive}
      className={`${isSideBarActive && 'side-bar-active'}`}
    >
      <Link href={path}>
        <a>
          <Icon 
            path={isActive ? fullIcon : outlineIcon} 
            size={size} 
          />
          <span className="label-text">{label}</span>
        </a>
      </Link>

      <Tooltip>
        {label}
      </Tooltip>
    </StyledListItem>
  );
}