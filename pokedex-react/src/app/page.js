import { fetchData } from "./api/pokemonsList"
import Card from "./components/Card/page"
import { Container } from "./styles"

const App = async () => {
  const { results } = await fetchData();
  return (
    <Container>
      {results.length > 0 && results.map(({ name }) => (
        <Card name={name} />
      ))}
    </Container>
  )
}

export default App