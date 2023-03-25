import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const [cardName, setCardName] = useState("");
    const [cardLink, setCardLink] = useState("");


    useEffect(() => {
        setCardName("");
        setCardLink("");
    }, [onClose]);

    function handleCardName(e) {
        setCardName(e.target.value);
    }
    function handleCardLink(e) {
        setCardLink(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        onAddPlace({
          name: cardName,
          link: cardLink,
        });
      };

    return (
        <PopupWithForm
            title="Новое место"
            name="card"
            buttonText={isLoading? 'Создание...' : 'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input type="text" name="nameCard" placeholder="Название" className="popup__input popup__input_card_name"
                id="card-name-input" minLength="2" maxLength="30" required onChange={handleCardName} value={cardName} />
            <span className="popup__input-error card-name-input-error"></span>
            <input type="url" name="linkCard" placeholder="Ссылка на картинку" className="popup__input popup__input_card_link"
                id="card-link-input" required onChange={handleCardLink} value={cardLink} />
            <span className="popup__input-error card-link-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;