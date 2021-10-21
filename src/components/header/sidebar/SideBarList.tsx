import { mdiHome, mdiHomeOutline, mdiStar, mdiStarOutline } from "@mdi/js";
import { SideBarListContainer } from "../styled";
import ListItem from "./ListItem";

export default function SideBarList() {
  return (
    <SideBarListContainer>
      <ListItem 
        label="Início"
        size={1}
        path="/"
        fullIcon={mdiHome}
        outlineIcon={mdiHomeOutline}
      />
      <ListItem 
        label="Favoritos"
        size={1}
        path="/favorites"
        fullIcon={mdiStar}
        outlineIcon={mdiStarOutline}
      />
    </SideBarListContainer>
  );
}