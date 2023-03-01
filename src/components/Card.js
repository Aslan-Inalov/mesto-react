function Card({ card, onCardClick }) {
    return (
        <li className="element__item">
            <img src={card.link} alt={card.name} className="element__image" onClick={() => onCardClick(card)} />
            <div className="element__description">
                <h3 className="element__title">{card.name}</h3>
                <div className="element__like-container">
                    <button className="element__like opacity" aria-label="Лайк" type="button"></button>
                    <span className="element__like-counter">{card.likes.length}</span>
                </div>
            </div>
            <button className="element__delete opacity" aria-label="Удалить"></button>
        </li>
    )
}

export default Card;