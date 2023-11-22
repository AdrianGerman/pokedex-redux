import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../styles/PokemonCard.css";

const PokemonCard = () => {
  return (
    <Card
      title="Ditto"
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Ditto"
        />
      }
      extra={<StarOutlined className="star" />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
