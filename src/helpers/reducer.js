import { useState } from "react";
import { initialPokemons } from "./initialPokemons";


export const reducer = (state = [], action) =>{


    switch (action.type) {
        case "start":
            const { pokemon_entries } =  JSON.parse(localStorage.getItem('pokemons')) || [ { pokemons_species: [] } ]
            
            const initial = initialPokemons(pokemon_entries)

            return [
                ...initial
            ]

        case "load":
            
            return [
                ...state,
                ...action.payload.pokemons
            ]
        case "search":
                        
            const foundPokemon = state.filter( ( pokemon ) => ( Object.values(pokemon).some( (val) => ( val.includes( action.payload.value ) ) ) ))
            return foundPokemon;

        case "again":

            return initialPokemons();
        
        case "filter":   
            
            if( action.payload.flag < 1 && action.payload.filters.length !== 0 ){
                state = [ ]
            }

            if (action.payload.filters.length !== 0) {
                state = [ ...state, ...action.payload.filters ]
                
                const filters = state.filter( (v,i,a) => a.findIndex(t=>(t.name === v.name)) ===i );

                return[           
                    ...filters                    
                ]
            }else {
                return [ ...state ]
            }

        case "remove":
            return [
                
            ]                
            

        default:
            break;
    }
}