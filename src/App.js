import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { AppRouter } from "./components/router/AppRouter";
import { pokemonContext } from "./context/Context";
import { initialPokemons } from "./helpers/initialPokemons";
import { reducer } from "./helpers/reducer";
import { useFetch } from "./helpers/useFetch";

const init = () => {
  const initial = initialPokemons();

  return initial || [];
};

function App() {
  // petición para guardar datos de pokemons en localstorage
  const [{ data }] = useFetch(`${process.env.REACT_APP_POKEMON_ENDPOINT}/pokedex/national`);

  // permite ver el cargue de pokemons y de hacer las busquedas
  const [state, dispatch] = useReducer(reducer, [], init);

  //contador para borrar datos despues de seleccionar
  const [firstFilter, setFirstFilter] = useState(0);

  // para guardar en el localstorage
  useEffect(() => {
    if ( data !== null ) {
      localStorage.setItem("pokemons", JSON.stringify(data));
    }

    dispatch({
      type: "start",
      payload: {}
    })

  }, [data]);

  return (
      <pokemonContext.Provider value={{ state, dispatch, firstFilter, setFirstFilter }}>
        <AppRouter />
     </pokemonContext.Provider>
  );
}

export default App;
