import { HeaderContainer } from './styled';
import Logo from './Logo';
import Navbar from './navbar/Navbar';
import SideBar from './sidebar/SideBar';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <SideBar />
      <Navbar />
    </HeaderContainer>
  );
}
