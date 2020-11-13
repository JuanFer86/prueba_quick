import React, { useContext } from "react";
import { pokemonContext } from "../../context/Context";
import { requestFilters } from "../../helpers/requestFilters";
import { useFetch } from "../../helpers/useFetch";

import "./custom.css";

export const Colors = () => {

  const { dispatch, firstFilter, setFirstFilter } = useContext(pokemonContext);


  const [ { data, loading } ] = useFetch(
    `${process.env.REACT_APP_POKEMON_ENDPOINT}/pokemon-color`
  );

  const handleColor = async(e) => {

    requestFilters( dispatch, { by: "pokemon-color", id: e.target.id, destruc: "pokemon_species", flag: firstFilter, setFirstFilter: setFirstFilter  } );
  }

  return (
    <>
      <h5 className="m-2">Colores</h5>
      <div className="grid-colors m-2">
        {!loading &&
          data.results.map(({ name }) => {
            return (
              <label
                key={`customCheck-${name}`}
                className="control control-checkbox"                
              >
                <input id={name} type="checkbox" onClick={ handleColor }/>
                <div
                  className="control_indicator"
                  style={{ backgroundColor: name }}
                ></div>
              </label>
            );
          })}
      </div>
    </>
  );
};
