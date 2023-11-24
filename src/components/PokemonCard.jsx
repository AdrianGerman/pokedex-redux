import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "../styles/PokemonCard.css";

const PokemonCard = ({ name, image }) => {
  return (
    <Card
      title={name}
      cover={<img src={image} alt={image} />}
      extra={<StarOutlined className="star" />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
