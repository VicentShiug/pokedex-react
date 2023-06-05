export const getPokemonInfo = async (pokemon) => {
    const res = await fetch(`https://pokeapi.glitch.me/v1/pokemon/${pokemon}`)
    return res.json()
}