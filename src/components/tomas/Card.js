import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CardTomas = ({ character, handleDeleteCharacter, handleUpdate }) => {
  const [characterState, setCharacterState] = useState(character);
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleDelete = () => handleDeleteCharacter(character.id);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleChange = (event) => {
    // console.log(event.target,event.target.name,event.target.value)
    setCharacterState({
      ...characterState,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    closeModal();
    handleUpdate(characterState);
  };
  const handelCancel = () => {
    setCharacterState(character);
    closeModal();
  };

  return (
    <div className="parent_book_listing">
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
          <button type="reset" onClick={handelCancel}>
            cancel
          </button>
        </form>
      </Modal>
      <div className="d-flex mt-3">
        <button onClick={handleDelete}>x</button>
        <button className="ml-auto" onClick={openModal}>
          EDIT
        </button>
      </div>
      <div className="book_listing">
        <img className="img_book_list" alt="" src={character.imageUrl}></img>
        <div className="wrap_text_book_list">
          <h3 className="book_name">{character.name}</h3>
          <div className="book_meta_info">{character.lastName}</div>
          <div className="div_book_list_category">{character.age}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTomas;
