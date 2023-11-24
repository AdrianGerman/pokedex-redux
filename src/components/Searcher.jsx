import { Input } from "antd";

const Searcher = () => {
  return (
    <Input.Search
      placeholder="Buscar...."
      enterButton
      style={{ marginBottom: 10 }}
    />
  );
};

export default Searcher;
