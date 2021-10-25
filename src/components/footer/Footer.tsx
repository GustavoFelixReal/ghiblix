import CompanyLogo from './CompanyLogo';
import { FooterContainer } from './styled';
import SwitchThemeButton from './SwitchThemeButton';

export default function Footer() {
  return (
    <FooterContainer>
      <CompanyLogo />
      <hr />
      <div className="copyrigth">
        <p>&copy; {new Date().getFullYear()}. Feito com muito 💖 em Guarulhos/SP</p>
      </div>
      <SwitchThemeButton />
    </FooterContainer>
  );
}
