import React from 'react';

function Card({ likes,link,name,selectedCard, onZoom }) {
 
    function handleClick() {
      onZoom()
      selectedCard({link,name})
      
    }  
   
    return (
      <li className="card">
        <button type="button" className="card__delete-btn"></button>
        <img className="card__image" onClick={handleClick} src={link} alt={name} />
        <div className="card__caption">
          <h2 className="card__name">{name}</h2>
          <div className="card__likes-container">
            <button type="button"
              className="card__like-btn"
            ></button>
            <span className="card__like-counter">{likes.length}</span>
          </div>
        </div>
      </li>
    );
  }
  
  export default Card;