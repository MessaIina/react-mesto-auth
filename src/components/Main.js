import { useState, useEffect } from 'react'
import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, selectedCard, onZoom}) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);


  useEffect(()=>{
    Promise.all([
      api.getInitialCards(),
      api.getUserInfo(),
    ])
    .then(([resultInitial, resultInformation]) => {

      setUserName(resultInformation.name)
      setUserDescription(resultInformation.about)
      setUserAvatar(resultInformation.avatar)
      setCards(resultInitial)
    })
    .catch((err) => {
      console.log(err);
    });
    

  }, [])

  return (
   
    <main className="content container">
      <section className="profile">
        <div className="profile__avatar-container">
          <button className="profile__avatar" onClick={onEditAvatar}>
            <img className="profile__avatar-edit-btn" src={userAvatar} alt="Аватар профиля"/>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__name-container">  
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-btn" onClick={onAddPlace}></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id} 
              card={card} 
              selectedCard={selectedCard}
              onZoom={onZoom}
            />
          ))}
       </ul>
      </section>
    </main>

  );
}

export default Main;
