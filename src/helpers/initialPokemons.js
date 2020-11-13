import { pokemon_entries } from "./pokemonStorage"


export const initialPokemons = () => {
    let pokemons = []

    for (let index = 0; index < 20; index++) {   
        pokemons = [ ...pokemons, pokemon_entries[index].pokemon_species ]
      }

    return pokemons;
}