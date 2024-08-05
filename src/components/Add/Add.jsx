import React, { useContext, useState } from "react";
import { TanksContext } from "../../context/TanksContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const { createTank } = useContext(TanksContext);

  const [newTank, setNewTank] = useState({
    name: "",
    type: "",
    country: "",
    image: "",
    price: "",
    description: "",
  });

  const handleValues = (e) => {
    const { name, value } = e.target;
    setNewTank((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const checkValues = () => {
    const { name, type, country, image, price, description } = newTank;
    if (!name || !type || !country || !image || !price || !description) {
      alert("Заполните все поля!");
      return;
    }

    createTank(newTank);
    navigate("/tanks");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url(https://cdn.igromania.ru/mnt/news/6/9/4/3/0/6/87235/aff8b0534843c376_1920xH.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        padding: "20px"
      }}
    >
      <div
        style={{
          border: "4px solid grey",
          borderRadius: "5%",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "20px",
          minWidth: '320px',
          width: '100%',
          maxWidth: '600px'
        }}
        className="d-flex flex-column align-items-center"
      >
        <h3 style={{ color: "white" }}>Форма для добавления танка</h3>
        <input
          onChange={handleValues}
          style={{ height: "40px", margin: "10px" }}
          type="text"
          placeholder="Введите имя"
          name="name"
          value={newTank.name}
          className="form-control"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px", margin: "10px" }}
          type="text"
          placeholder="Введите тип"
          name="type"
          value={newTank.type}
          className="form-control"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px", margin: "10px" }}
          type="text"
          placeholder="Введите нацию"
          name="country"
          value={newTank.country}
          className="form-control"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px", margin: "10px" }}
          type="text"
          placeholder="Введите URL для картинки"
          name="image"
          value={newTank.image}
          className="form-control"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px", margin: "10px" }}
          type="text"
          placeholder="Введите описание"
          name="description"
          value={newTank.description}
          className="form-control"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px", margin: "10px" }}
          type="number"
          placeholder="Введите цену"
          name="price"
          value={newTank.price}
          className="form-control"
        />
        <button
          onClick={checkValues}
          style={{
            background: "orangered",
            color: "white",
            fontSize: "20px",
            fontWeight: "500",
            marginTop: "20px",
          }}
          className="btn btn-warning"
        >
          ДОБАВИТЬ
        </button>
      </div>
    </div>
  );
};

export default Add;
