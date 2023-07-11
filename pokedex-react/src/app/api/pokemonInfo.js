export const getPokemonInfo = async (url) => {
  const res = await fetch(url)
  return res.json()
}