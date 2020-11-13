
export const requestFilters = async ( dispatch, { by, id, destruc, proper = null, flag, setFirstFilter } ) => {

    const resp = await fetch(`${process.env.REACT_APP_POKEMON_ENDPOINT}/${by}/${id}`);
    const json = await resp.json();
    
    if( json[destruc].length !== 0 ){
      
      let pokemonBy = []
      json[ destruc ].map( (pok) => { 
        proper !== null ?        
        pokemonBy = [ ...pokemonBy, pok[proper] ] :
        pokemonBy = [ ...pokemonBy, pok] ;

      } )

      setFirstFilter( flag + 1 )

      dispatch({
        type: 'filter',
        payload: {
          filters: pokemonBy,
          flag: flag
        }
      })
    }      
}