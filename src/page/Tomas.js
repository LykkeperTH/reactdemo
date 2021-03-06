import React, { useEffect } from "react";
import { useState } from "react";
import CardTomas from "../components/tomas/Card";
import Header from "../components/tomas/Header";
import { customStyles } from "./Home";
import Modal from "react-modal";

const Tomas = () => {
  const characters = [
    {
      id: "1",
      name: "Thomas",
      lastName: "Shelby",
      age: "30",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: "2",
      name: "Grace",
      lastName: "Shelby",
      age: "27",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: "3",
      name: "Arthur",
      lastName: "Shelby",
      age: "32",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: "4",
      name: "Finn",
      lastName: "Shelby",
      age: "12",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
  ];
  const [modalIsOpen, setIsOpen] = useState(false);
  const [charactersState, setCharactersState] = useState(characters);
  const [characterState, setCharacterState] = useState({
    name: "",
    lastName: "",
    age: "",
    imageUrl: "",
  });
  useEffect(() => {
    const charactersStorage = localStorage.getItem("characters");
    if (charactersStorage) {
      setCharactersState(JSON.parse(charactersStorage));
    } else {
      setCharactersToStorage(charactersState);
    }
  }, []);

  useEffect(() => {
    setCharactersToStorage(charactersState);
  }, [charactersState]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleClear = () => {
    setCharactersState([]);
  };

  const handleUpdate = (character) => {
    const characterIndex = charactersState.findIndex(
      (characterState) => characterState.id === character.id
    );
    if (characterIndex !== -1) {
      const newCharactersState = [...charactersState];
      newCharactersState[characterIndex] = character;
      setCharactersState(newCharactersState);
    }
  };
  const handleDeleteCharacter = (characterId) => {
    const newCharactersState = charactersState.filter((character) => {
      return character.id !== characterId;
    });
    setCharactersState(newCharactersState);
  };

  const handleChange = (e) => {
    console.log(e.target, e.target.name, e.target.value);
    setCharacterState({
      ...characterState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    setCharactersState([
      ...charactersState,
      { ...characterState, id: Math.random().toString() },
    ]);
    setCharacterState({});
    closeModal();
  };

  const setCharactersToStorage = (characters) => {
    localStorage.setItem("characters", JSON.stringify(characters));
  };

  return (
    <div>
      <Header />
      <button onClick={openModal}>เพิ่มข้อมูล</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {" "}
        <form onSubmit={handleSubmit}>
          <div>
            <label>name</label>
            <input
              name="name"
              value={characterState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>lastName</label>
            <input
              name="lastName"
              value={characterState.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>age</label>
            <input
              type="number"
              name="age"
              value={characterState.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>imageUrl</label>
            <input
              name="imageUrl"
              value={characterState.imageUrl}
              onChange={handleChange}
            />
          </div>
          <button>submit</button>
        </form>
      </Modal>
      <button onClick={handleClear}>ลบข้อมูล</button>
      <div className="d-flex">
        {charactersState.map((character) => {
          return (
            <CardTomas
              key={character.id}
              character={character}
              handleDeleteCharacter={handleDeleteCharacter}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Tomas;
