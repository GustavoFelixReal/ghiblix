import { useRouter } from 'next/dist/client/router';

import { mdiHome, mdiStar } from '@mdi/js';

import Button from '../common/buttons/Button';
import { HeaderContainer } from './styled';
import Icon from '@mdi/react';
import Logo from './Logo';
import SideBar from './sidebar/SideBar';

export default function Header() {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Logo />

      <SideBar />

      <nav>
        <Button onClick={() => router.push('/')}>
          <Icon path={mdiHome} size={1} />
        </Button>
        <Button onClick={() => router.push('/favorites')}>
          <Icon path={mdiStar} size={1} />
        </Button>
      </nav>
    </HeaderContainer>
  );
}
