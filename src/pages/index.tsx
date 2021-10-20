import { useFavorites } from "../hooks/useFavorites";
import { Container } from "../styles/home";

export default function Home() {
  const { t } = { t: 'abacaxi' };

  const { favorites } = useFavorites();

  console.log(favorites);

  return (
    <Container>
      <h1>Hello World</h1>
    </Container>
  );
}
