import { useFavorites } from "../hooks/useFavorites";

/* Components */
import { Container } from "../styles/home";

export default function Home() {
  const { t } = { t: 'abacaxi' };

  const { favorites } = useFavorites();

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}
