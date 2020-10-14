import React from 'react'

const Card=({
    card,handleDeleteCard})=>{
        const handleDelete=()=>handleDeleteCard(card.id);
        
    return <div className='parent_book_listing'>
        <button onClick={handleDelete}>x</button>
        <div className='book_listing'>
            <div className="wrap_img_book_list">
                <img className='img_book_list' alt="" src={card.imageUrl}></img>
                </div>
            <div className='wrap_text_book_list'>
                <h3 className='book_name'>
                    {card.title} 
                </h3>
                <div className='book_meta_info'>
                    {card.description}
                </div>
                <div className='div_book_list_category'>
                    {card.price}
                </div>
            </div>
            <div className='wrap_btn_book_list'>
                {card.rating}
            </div>
        </div>


    </div>
}

export default Card
   
        


