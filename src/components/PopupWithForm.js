import React from 'react';

function PopupWithForm({ title, name, children, isOpen, onClose, buttonText, disabled}) {

    return (
     
      <div className={`popup ${name}-popup ${isOpen && 'popup_opened'}`}  >
        <div className="popup__container">
          <button type="button" className="popup__close-btn" onClick={onClose}></button>
          <form className="form" name={name}>
            <h2 className="form__heading">{title}</h2>
            <div className="form__input-container">
              {children} 
            </div>          
            <button className={`form__submit-btn ${disabled}`} type="submit">{buttonText}</button>           
          </form>
        </div>
      </div>
    );
  }
  
  export default PopupWithForm;