import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../../page/Home";

const Card = ({ card, handleDeleteCard, handleUpdate }) => {
  const [cardState, setCardState] = useState(card);
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleDelete = () => handleDeleteCard(card.id);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleChange = (event) => {
    // console.log(event.target,event.target.name,event.target.value)
    setCardState({ ...cardState, [event.target.name]: event.target.value });
  };
  const handleSubmit = () => {
    closeModal();
    handleUpdate(cardState);
  };
  const handelCancel = () => {
    setCardState(card);
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
            <label>title</label>
            <input
              name="title"
              value={cardState.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>description</label>
            <input
              name="description"
              value={cardState.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>price</label>
            <input
              type="number"
              name="price"
              value={cardState.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>rating</label>
            <input
              type="number"
              name="rating"
              value={cardState.rating}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>imageUrl</label>
            <input
              name="imageUrl"
              value={cardState.imageUrl}
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
        <div className="wrap_img_book_list">
          <img className="img_book_list" alt="" src={card.imageUrl}></img>
        </div>
        <div className="wrap_text_book_list">
          <h3 className="book_name">{card.title}</h3>
          <div className="book_meta_info">{card.description}</div>
          <div className="div_book_list_category">{card.price}</div>
        </div>
        <div className="wrap_btn_book_list">{card.rating}</div>
      </div>
    </div>
  );
};

export default Card;
