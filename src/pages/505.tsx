import ErrorMessage from '../components/common/errors/ErrorMessage';

export default function ServerError() {
  return (
    <ErrorMessage title="Oops!" message="Estamos com problemas técnicos." redirectTo="/" redirectButtonText="Início" />
  );
}
