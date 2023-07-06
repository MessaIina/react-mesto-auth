import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isZoomImagePopupOpen, setIsZoomImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsZoomImagePopupOpen(false);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleZoomClick() {
    setIsZoomImagePopupOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        selectedCard={setSelectedCard}
        onZoom={handleZoomClick}
      />
      <Footer />
      <ImagePopup
        src={selectedCard.link}
        alt={selectedCard.name}
        isOpen={isZoomImagePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name={"profile"}
        title={"Редактировать профиль"}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
        disabled={"form__submit-btn_inactive"}
      >
        <input className="form__item form__item-type-name" id="name" name="name" type="text" placeholder="Имя" required/>
        <span className="form__item-error form__item-type-name-error" id="name-error"></span>
        <input className="form__item form__item-type-job" id="about" name="about" type="text" placeholder="О себе" required/>
        <span className="form__item-error form__item-type-job-error" id="about-error"></span>
            
      </PopupWithForm>

      <PopupWithForm
        name={"card"}
        title={"Новое место"}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={"Создать"}
        disabled={"form__submit-btn_inactive"}
      >
        <input className="form__item form__item-type-place" id="place" name="place" type="text" placeholder="Название" required/>
        <span className="form__item-error form__item-type-place-error" id="place-error"></span>
        <input className="form__item form__item-type-link" id="link" name="link" type="url" placeholder="Ссылка на картинку" required/>
        <span className="form__item-error form__item-link-error" id="link-error"></span>
            
      </PopupWithForm>

      <PopupWithForm
        name={"avatar"}
        title={"Обновить аватар"}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={"Сохранить"}
        disabled={"form__submit-btn_inactive"}
      >
        <input className="form__item form__item-edit-avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на аватар" required/>
        <span className="form__item-error form__item-avatar-error" id="avatar-error"></span>
            
      </PopupWithForm>
      <section className="popup delete-popup">
        <div className="popup__container">
          <button type="button" className="popup__close-btn"></button>
          <form className="form form_delete" id="delete" name="delete-card-form">
            <h2 className="popup__heading">Вы уверены?</h2>
            <button type="submit" className="form__submit-btn form__delete-btn">Да</button>
          </form>
        </div>
      </section>
    </div>
    
  );
}

export default App;