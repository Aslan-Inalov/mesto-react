import PopupWithForm from "./PopupWithForm";
import { useForm } from "../hooks/useForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
    const {values, handleChange, setValues} = useForm({
        cardName: '',
        cardLink: ''
      });

    const handleSubmit = (e) => {
        e.preventDefault();
    
        onAddPlace({
          name: values.cardName,
          link: values.cardLink,
        });
        setValues({
            cardName: '',
            cardLink: ''
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
            <input type="text" name="cardName" placeholder="Название" className="popup__input popup__input_card_name"
                id="card-name-input" minLength="2" maxLength="30" required onChange={handleChange} value={values.cardName} />
            <span className="popup__input-error card-name-input-error"></span>
            <input type="url" name="cardLink" placeholder="Ссылка на картинку" className="popup__input popup__input_card_link"
                id="card-link-input" required onChange={handleChange} value={values.cardLink} />
            <span className="popup__input-error card-link-input-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;