import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { pokemonContext } from "../../context/Context";
import { requestFilters } from "../../helpers/requestFilters";
import { useFetch } from "../../helpers/useFetch";

import "./custom.css";

export const Filters = ({ typeForm = "radio", url = "types", title }) => {

  const { dispatch, firstFilter, setFirstFilter } = useContext(pokemonContext);

  const [ { data, loading } ] = useFetch(
    `${process.env.REACT_APP_POKEMON_ENDPOINT}/${url}`
  );

  const handleCheck = async (e) => {
    const by = typeForm === "radio" ? "gender" : "type";


    if( by === "gender" ){
      
      requestFilters( dispatch, { by: by, id: e.target.id, destruc: "pokemon_species_details", proper: "pokemon_species", flag: firstFilter, setFirstFilter: setFirstFilter } );
      
    }else {

      requestFilters( dispatch, { by: by, id: e.target.id, destruc: "pokemon", proper: "pokemon", flag: firstFilter, setFirstFilter: setFirstFilter } );

      
    }

  }

  return (
    <>
      <h5 className="m-2">{title}</h5>
      <Form className="m-2">
        <div className={ typeForm === "checkbox" ? "grid-form" : null }>
          {!loading &&
            data.results.map(({ name }) => (
              <Form.Check
                onChange={ handleCheck }
                type={typeForm}
                key={`${typeForm}-${name}`}
                name={typeForm}
                id={name}
                label={name}
              />
            ))}
        </div>
      </Form>
    </>
  );
};
