import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { TanksContext } from '../../context/TanksContext';
import './Edit.css'; // Подключите файл CSS для стилей

const Edit = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { getTanksForEdit, editTanks, edit } = useContext(TanksContext);

  const [edited, setEdited] = useState({
    name: '',
    type: '',
    country: '',
    image: '',
    price: '',
    description: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getTanksForEdit(params.id);
      } catch (error) {
        console.error('Failed to fetch tank details', error);
      }
    };
    fetchData();
  }, [params.id, getTanksForEdit]);

  useEffect(() => {
    if (edit) {
      setEdited(edit);
    }
  }, [edit]);

  function handleValues(e) {
    const { name, value } = e.target;
    setEdited(prevState => ({ ...prevState, [name]: value }));
  }

  function checkValues() {
    const { name, type, country, image, price, description } = edited;
    if (!name || !type || !country || !image || !price || !description) {
      alert("Заполните все поля!");
      return;
    }
    editTanks(params.id, edited)
      .then(() => navigate('/tanks'))
      .catch(error => console.error('Failed to edit tank', error));
  }

  return (
    <>
      {edited ? (
        <div className="edit-container">
          <div className="edit-form">
            <h3 className="form-title">Форма для редактирования</h3>
            <input
              value={edited.name}
              onChange={handleValues}
              type="text"
              placeholder="Введите имя"
              name="name"
              className="form-input"
            />
            <input
              value={edited.type}
              onChange={handleValues}
              type="text"
              placeholder="Введите тип"
              name="type"
              className="form-input"
            />
            <input
              value={edited.country}
              onChange={handleValues}
              type="text"
              placeholder="Введите страну"
              name="country"
              className="form-input"
            />
            <input
              value={edited.image}
              onChange={handleValues}
              type="text"
              placeholder="Введите URL для картинки"
              name="image"
              className="form-input"
            />
            <input
              value={edited.description}
              onChange={handleValues}
              type="text"
              placeholder="Введите описание"
              name="description"
              className="form-input"
            />
            <input
              value={edited.price}
              onChange={handleValues}
              type="number"
              placeholder="Введите цену"
              name="price"
              className="form-input"
            />
            <button
              onClick={checkValues}
              className="save-button"
            >
              Сохранить
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Edit;
