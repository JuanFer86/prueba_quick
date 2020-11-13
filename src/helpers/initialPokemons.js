import { pokemon_entries } from "./pokemonStorage"


export const initialPokemons = () => {
    let pokemons = []

    if( Array.isArray(pokemon_entries) ){

      for (let index = 0; index < 20; index++) {   
          pokemons = [ ...pokemons, pokemon_entries[index].pokemon_species ]
        }
    }

    return pokemons;
}