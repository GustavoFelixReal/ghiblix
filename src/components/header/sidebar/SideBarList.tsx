import { mdiHome, mdiHomeOutline, mdiStar, mdiStarOutline } from '@mdi/js';

import SideBarItem from './SideBarItem';
import { SideBarListContainer } from '../styled';

export default function SideBarList() {
  return (
    <SideBarListContainer>
      <SideBarItem label="Início" size={1} path="/" fullIcon={mdiHome} outlineIcon={mdiHomeOutline} />
      <SideBarItem label="Favoritos" size={1} path="/favorites" fullIcon={mdiStar} outlineIcon={mdiStarOutline} />
    </SideBarListContainer>
  );
}
