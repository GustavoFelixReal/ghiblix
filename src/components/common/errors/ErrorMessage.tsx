import { useRouter } from 'next/router';
import Button from '../buttons/Button';
import Character from './Character';
import { ErrorMessageContainer } from './styled';

interface ErrorMessageProps {
  title: string;
  message: string;
  redirectTo: string;
  redirectButtonText: string;
  showRedirect?: boolean;
}

export default function ErrorMessage({
  title,
  message,
  redirectTo,
  redirectButtonText,
  showRedirect = true,
}: ErrorMessageProps) {
  const router = useRouter();

  return (
    <ErrorMessageContainer>
      <Character />
      <h1>{title}</h1>
      <h3>{message}</h3>
      {showRedirect && (
        <Button variant="primary" onClick={() => router.push(redirectTo)}>
          {redirectButtonText}
        </Button>
      )}
    </ErrorMessageContainer>
  );
}
