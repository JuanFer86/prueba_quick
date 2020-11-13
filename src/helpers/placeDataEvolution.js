import { urlToId } from "../helpers/urlToId";


export const placeDataEvolutions = (chain) => {
    let evolutions = [  ]
    for (const key in chain) {
      if( key === "evolves_to" ){
        for (const evolve in chain[key][0]) {
          if ( evolve === "evolves_to" ){
            
            for (const evolve2 in chain[key][0][evolve][0]) {
              
              evolve2 === "species" && ( () => {
                const idEvolve2 = urlToId( chain[key][0][evolve][0][evolve2].url )
                evolutions = [ ...evolutions, { id: idEvolve2, name: chain[key][0][evolve][0][evolve2].name }] 
              })()
            }

          } else if( evolve === "species" ){

            const idEvolve = urlToId(chain[key][0][evolve].url)
            evolutions = [ ...evolutions, { id: idEvolve, name: chain[key][0][evolve].name} ]

          }
        }
      }else if ( key === "species" ) {
        const id = urlToId(chain[key].url)
        evolutions = [ ...evolutions, { id: id, name: chain[key].name } ]
      }
    }

    return evolutions;
}