import ErrorMessage from '../components/common/errors/ErrorMessage';

export default function NotFound() {
  return (
    <ErrorMessage
      title="Oops!"
      message="Não encontramos a página solicitada."
      redirectTo="/"
      redirectButtonText="Início"
    />
  );
}
