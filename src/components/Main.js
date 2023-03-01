import { api } from '../utils/api';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo().then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        });
        api.getInitialCards().then(dataCard => {
            setCards(dataCard);
        })
    }, []);


    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={onEditAvatar}>
                    <img src={userAvatar} alt="аватарка" className="profile__avatar" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button opacity" onClick={onEditProfile} aria-label="Редактировать профиль" type="button"></button>
                    <p className="profile__about">{userDescription}</p>
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