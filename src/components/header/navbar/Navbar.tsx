import { mdiHome, mdiHomeOutline, mdiStar, mdiStarOutline } from '@mdi/js';
import { NavbarContainer } from '../styled';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarItem path="/" fullIcon={mdiHome} outlineIcon={mdiHomeOutline} size={1} />

      <NavbarItem path="/favorites" fullIcon={mdiStar} outlineIcon={mdiStarOutline} size={1} />
    </NavbarContainer>
  );
}
