import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { placeDataEvolutions } from "../../helpers/placeDataEvolution";
import { urlToId } from "../../helpers/urlToId";
import { PokemonModal } from "./PokemonModal";

import "./Element.css"

export const Element = ({ data: { name, url } }) => {
  const [ state, setState] = useState({
    modal: false,
    idPok: "000",
    name: name,
    table: {
      altura: "",
      peso: "",
      genero: "",
      habitat: "",
      color:""
    },
    tags: [],
    evolutions: {}
  });
  const handleModal = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const { height, weight, types  } = await resp.json()

    const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
    const { habitat, color, gender_rate, evolution_chain } = await resp2.json();
    
    const resp3 = await fetch(evolution_chain.url);
    const { chain } = await resp3.json();

    const evolutions = placeDataEvolutions(chain);

    setState({
      ...state,
        modal: !state.modal,
        table: [
          {
            title: "altura",
            name: height
          },
          {
            title: "peso",
            name: weight
          },
          {
            title: "genero",
            name: gender_rate === 1 ? "masculino - femenino" : "sin genero",
          },
          {
            title: "habitat",
            name: habitat !== null && [ ...habitat["name"] ]
          },
          {
            title: "color",
            name: [ ...color["name"] ]
          },

        ],     
         tags: [ ...types ],
         evolutions: evolutions.sort( (a,b) => ( a.id - b.id ))
    })
  };

  useEffect( () => {
    const digits = urlToId(url)
    
      setState({
        ...state,
        idPok: digits
      })
    
  }, [ name ] )

  return (
    <>    
      <PokemonModal state={state} onHide={handleModal} />

      <Card
        style={{ width: "100%", cursor: "pointer" }}
        onClick={handleModal}
        // border="info"
      >
          <Card.Img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${state.idPok}.png`} alt="Card imagen" />
        <Card.Footer>
          <Card.Title className="text-center mb-0">{ name }</Card.Title>           
        </Card.Footer>
      </Card>
    </>
  );
};
