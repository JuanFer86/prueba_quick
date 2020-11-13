import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { pokemonContext } from "../../context/Context";
import { pokemon_entries } from "../../helpers/pokemonStorage";
import { Element } from './Element';

export const Content = () => {  

  // const [state, dispatch] = useReducer(reducer, [], init)
  const { state, dispatch } = useContext(pokemonContext);
  
  const handleClick = async () => {
    let pokemons = []
    for (let index = state.length; index < state.length + 20; index++){
      pokemons = [ ...pokemons, pokemon_entries[index].pokemon_species ]
    }

    dispatch({
      type: "load",
      payload: {
        pokemons: pokemons
      }
    });
  }

  return (
    <>
    <Row>
      {/* {
        loading && <h3>Cargando...</h3>
      } */}
        {
          state.length !== 0 ? state.map( (pokemon, i) => (                      
              <Col key={`el-${i}`} xs={6} md={4} className="mt-3" >
                <Element data={ pokemon }/>
              </Col>            
          )): <p>No se encuetran pokemons</p>
        }   
    </Row>
    <Row>
      {
        state.length < 800 &&
        <Col className="mt-3" md={{ span: 5, offset: 5 }}>
          <Button variant="primary" onClick={ handleClick }>
            Ver más
          </Button>
        </Col> 
      }
    </Row>
    </>
  );
};
