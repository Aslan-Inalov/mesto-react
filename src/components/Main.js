import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import Card from './Card';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
}) {
    const currentUser = useContext(CurrentUserContext);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInitialCards().then(dataCard => {
            setCards(dataCard);
        })
    }, []);


    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={onEditAvatar}>
                    <img src={currentUser.avatar} alt="аватарка" className="profile__avatar" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button opacity" onClick={onEditProfile} aria-label="Редактировать профиль" type="button"></button>
                    <p className="profile__about">{currentUser.about}</p>
                </div>
                <button className="profile__add-button opacity" onClick={onAddPlace} aria-label="Добавить" type="button"></button>
            </section>
            <section className="elements">
                <ul className="element">
                    {cards.map(card => (
                        <Card key={card._id} card={card} onCardClick={onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;