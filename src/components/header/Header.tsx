import Logo from "./Logo";
import SideBar from "./sidebar/SideBar";
import { HeaderContainer } from "./styled";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo /> cabeçalho

      <SideBar />
    </HeaderContainer>
  )
}