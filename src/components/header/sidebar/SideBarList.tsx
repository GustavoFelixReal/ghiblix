import { mdiHome, mdiHomeOutline, mdiStar, mdiStarOutline } from '@mdi/js';

import NavItem from '../NavItem';
import { SideBarListContainer } from '../styled';

export default function SideBarList() {
  return (
    <SideBarListContainer>
      <NavItem label="Início" size={1} path="/" fullIcon={mdiHome} outlineIcon={mdiHomeOutline} />
      <NavItem label="Favoritos" size={1} path="/favorites" fullIcon={mdiStar} outlineIcon={mdiStarOutline} />
    </SideBarListContainer>
  );
}
