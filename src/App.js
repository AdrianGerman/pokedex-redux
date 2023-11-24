/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import { getPokemon } from "./api";
import { getPokemonsWithDetails } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };
    fetchPokemons();
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
      <PokemonList pokemons={pokemons} />
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
