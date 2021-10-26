import { useRouter } from 'next/router';

import Button from '../components/common/buttons/Button';
import Character from '../components/film/Character';
import { ErrorContainer } from '../styles/pages';

export default function NotFound() {
  const router = useRouter();

  return (
    <ErrorContainer>
      <Character />
      <h1>Oops!</h1>
      <h3>Não encontramos a página solicitada.</h3>
      <Button variant="primary" onClick={() => router.push('/')}>
        Início
      </Button>
    </ErrorContainer>
  );
}
