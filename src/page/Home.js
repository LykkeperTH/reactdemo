import React, { useEffect, useState } from "react";
import Card from "../components/home/Card";
import Modal from "react-modal";
export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Home() {
  const cards = [
    {
      id: 1,
      title: "จำเลยรักลวงใจ",
      description: "เป็นนิยายรัก",
      price: 149,
      rating: 3,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: 2,
      title: "กลยุทธ์",
      description: "เป็นนิยายรัก",
      price: 200,
      rating: 1,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: 3,
      title: "เดิมพันแค้น",
      description: "เป็นนิยายรัก",
      price: 200,
      rating: 3,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: 4,
      title: "บ้านสกุลหลิน",
      description: "เป็นนิยายรัก",
      price: 100,
      rating: 4,
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
  ];
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cardsState, setCardsState] = useState(cards);
  const [cardState, setCardState] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    imageUrl: "",
  });
  useEffect(() => {
    const cardsStorage = localStorage.getItem("cards");
    if (cardsStorage) {
      setCardsState(JSON.parse(cardsStorage));
    } else {
      setCardsToStorage(cardsState);
    }
  }, []);
  useEffect(() => {
    setCardsToStorage(cardsState);
  }, [cardsState]);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClear = () => {
    setCardsState([]);
  };
  const handleDeleteCard = (cardId) => {
    const newCardsState = cardsState.filter((card) => {
      return card.id !== cardId;
    });
    setCardsState(newCardsState);
  };
  const handleChange = (e) => {
    // console.log(event.target,event.target.name,event.target.value)
    setCardState({ ...cardState, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    closeModal();
    setCardsState([
      ...cardsState,
      { ...cardState, id: Math.random().toString() },
    ]);
    setCardState([]);
  };
  const handleUpdate = (card) => {
    const cardIndex = cardsState.findIndex(
      (cardState) => cardState.id === card.id
    );
    if (cardIndex !== -1) {
      const newCardsState = [...cardsState];
      newCardsState[cardIndex] = card;
      setCardsState(newCardsState);
    }
  };
  const setCardsToStorage = (cards) => {
    localStorage.setItem("cards", JSON.stringify(cards));
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
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
        </form>
      </Modal>

      <button onClick={handleClear}>Clear</button>
      <div className="d-flex">
        {cardsState.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              handleDeleteCard={handleDeleteCard}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
