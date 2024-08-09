import { Select } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { TanksContext } from "../../context/TanksContext";

const { Option } = Select;

const Filter = ({ type, setType }) => {
  const { getTanks, tanks } = useContext(TanksContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTanks = async () => {
      await getTanks();
      setLoading(false);
    };
    fetchTanks();
  });

  if (loading) return <div>Loading...</div>;

  return (
    <Select
      className="m-1"
      value={type}
      onChange={(e) => setType(e)}
      style={{ width: "200px", fontSize: "20px" }}
      mode="multiple"
      placeholder="Фильтр"
    >
      {tanks.length > 0 ? (
        tanks.map((item, idx) => (
          <Option value={item.type} key={item.id + idx}>
            {item.type}
          </Option>
        ))
      ) : (
        <Option disabled>Нет данных</Option>
      )}
    </Select>
  );
};

export default Filter;

