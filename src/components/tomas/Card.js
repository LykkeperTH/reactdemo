import React from "react";
function CardTomas({ character }) {
  return (
    <div className="parent_book_listing">
      <button>x</button>
      <div className="book_listing">
        <div className="bookpossition">
          <img className="img_book_list" alt="" src={character.imageUrl}></img>
        </div>
        <div className="wrap_text_book_list">
          <h3 className="book_name">{character.name}</h3>
          <div className="book_meta_info">{character.lastName}</div>
          <div className="div_book_list_category">{character.age}</div>
        </div>
      </div>
    </div>
  );
}
export default CardTomas;
