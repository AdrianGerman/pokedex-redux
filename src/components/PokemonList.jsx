import PokemonCard from "./PokemonCard";
import "../styles/PokemonList.css";

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemons) => {
        return <PokemonCard />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};

export default PokemonList;
