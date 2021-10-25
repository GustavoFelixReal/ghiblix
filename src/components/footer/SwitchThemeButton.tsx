import { mdiMoonWaningCrescent, mdiMoonWaxingCrescent, mdiWhiteBalanceSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { useCallback } from 'react';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import Button from '../common/buttons/Button';
import { SwitchThemeButtonContainer } from './styled';

export default function SwitchThemeButton() {
  const { theme, createTheme } = useCustomTheme();

  const handleToggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    createTheme(newTheme);
  }, [theme]);

  return (
    <SwitchThemeButtonContainer>
      <Button onClick={() => handleToggleTheme()} rounded>
        <Icon path={theme === 'light' ? mdiMoonWaningCrescent : mdiWhiteBalanceSunny} size={1} />
      </Button>
    </SwitchThemeButtonContainer>
  );
}
