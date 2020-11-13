import { initialPokemons } from "./initialPokemons";


export const reducer = (state = [], action) =>{
    switch (action.type) {
        case "load":
            console.log(action.payload)
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
                return[           
                    ...state,     
                    ...action.payload.filters
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