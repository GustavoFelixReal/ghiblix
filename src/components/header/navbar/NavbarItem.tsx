import { useRouter } from 'next/router';

import Button from '../../common/buttons/Button';
import Icon from '@mdi/react';

interface NavbarItemProps {
  fullIcon: string;
  outlineIcon: string;
  path: string;
  size: number;
}

export default function NavbarItem({ path, outlineIcon, fullIcon, size }: NavbarItemProps) {
  const { asPath, push } = useRouter();

  const isNavItemActive = asPath.split('?').shift() === path;

  return (
    <Button onClick={() => push(path)}>
      <Icon path={isNavItemActive ? fullIcon : outlineIcon} size={size} />
    </Button>
  );
}
