import { Card } from "antd";
import { useDispatch } from "react-redux";
import Meta from "antd/es/card/Meta";
import StartButton from "./StarButton";
import { setFavorite } from "../slices/dataSlice";

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();
  const typesString = types.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      bordered={false}
      style={{
        backgroundColor: "#313235",
        borderColor: "purple",
        borderStyle: "double",
      }}
      title={<span style={{ color: "white" }}>{name}</span>}
      cover={
        <img
          src={image}
          alt={image}
          style={{
            // backgroundColor: "#313246",
            borderRadius: "none",
          }}
        />
      }
      extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta
        description={<span style={{ color: "white" }}>{typesString}</span>}
      />
    </Card>
  );
};

export default PokemonCard;
