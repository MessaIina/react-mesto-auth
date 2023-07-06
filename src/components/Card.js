import React from 'react';

function Card({ card, selectedCard, onZoom }) {
  function handleClick() {
    onZoom();
    selectedCard(card);
  }

  return (
    <li className="card">
      <button type="button" className="card__delete-btn"></button>
      <img className="card__image" onClick={handleClick} src={card.link} alt={card.name} />
      <div className="card__caption">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__likes-container">
          <button type="button" className="card__like-btn"></button>
          {Array.isArray(card.likes) && (
            <span className="card__like-counter">{card.likes.length}</span>
          )}
        </div>
      </div>
    </li>
  );
}

export default Card;