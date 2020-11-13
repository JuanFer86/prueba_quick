// import { pokemon_entries } from "./pokemon_storage"

export const initialPokemons = ( pokemon_entries ) => {
    let pokemons = [];

      if( Array.isArray(pokemon_entries) ){

        for (let index = 0; index < 20; index++) {   
            pokemons = [ ...pokemons, pokemon_entries[index].pokemon_species ]
          }
      }       
    
    
    return pokemons;
}