/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Col, Spin } from "antd";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";
import "./App.css";

function App() {
  // const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const pokemons = useSelector(
    (state) => state.data.pokemonsFiltered,
    shallowEqual
  );
  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedex" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <h1 className="title">Yo te elijo!</h1>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsAction(value)),
// });

export default App;
