import PokemonsPage from "./Page/PokemonPage"
import { fetchData } from "./api/pokemonsList"
import { Pagination } from "./components/Pagination/Pagination"
import {PokemonStore} from "./store/pokemonStore"



const App = async () => {
  const { props } = await fetchData(20, 0)
  const { getState } = PokemonStore
  
  PokemonStore.setState({ state: { results: props ?? [] } })
  const limit = 20
  const offset = 0
  // const { props } = fetchData(limit, offset)
  // const {data} = props
  // const { count } = data
  return (
    <>
      <PokemonsPage props={props} />
      <Pagination
          props={props}
          limit={limit}
          total={400}
        />
    </>
  )
}

export default App