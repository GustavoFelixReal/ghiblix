import { createContext, useState } from 'react';

import { mdiMenu } from '@mdi/js';

import Button from '../../common/buttons/Button';
import Icon from '@mdi/react';
import Logo from '../Logo';
import { SideBarContainer } from '../styled';
import SideBarList from './SideBarList';

export const SideBarActiveContext = createContext(false);

export default function SideBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <SideBarActiveContext.Provider value={isActive}>
      <SideBarContainer className={`side-bar ${isActive && 'active'}`}>
        <div className="logo-container">
          <div className="logo">
            <Logo />
          </div>
        </div>

        <Button onClick={() => setIsActive(!isActive)}>
          <Icon path={mdiMenu} size={0.8} />
        </Button>

        <SideBarList />
      </SideBarContainer>
    </SideBarActiveContext.Provider>
  );
}
