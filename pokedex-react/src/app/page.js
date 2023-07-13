'use client'
import { useCallback, useEffect, useState } from "react"
import { fetchData } from "./api/pokemonsList"
import Card from "./components/Card/page"
import { Container } from "./styles"
import { useMutation, useQuery } from "react-query"


const fetchDados = async (pageNumber) => {
  const response = await fetchData(pageNumber)
  return response
}

const App = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const { data, isLoading } = useQuery({
    queryKey: ['pokemons', pageNumber],
    queryFn: () => fetchDados(pageNumber)
  })
  const chama = useCallback(async () => {
    const response = fetch(data?.next)
    const res = await response.json
    return res
  }, [])

  const next = () => {
  }
  const results = data?.results
  return (
    <Container>
      {results ?
        results.length > 0
        && results.map(({ name, url }) => (
          <Card propsCard={{ name, url }} />
        ))
        : null}
      <button
        onClick={() => {
          setPageNumber(pageNumber => pageNumber + 20)
        }}>
        NextPage
        {console.log(pageNumber)}
      </button>
    </Container>
  )
}

export default App