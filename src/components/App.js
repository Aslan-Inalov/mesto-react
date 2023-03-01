import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen( false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" name="name" placeholder="Имя" className="popup__input popup__input_user_name"
          id="profile-name-input" minlength="2" maxlength="40" required />
        <span className="popup__input-error profile-name-input-error"></span>
        <input type="text" name="about" placeholder="О себе" className="popup__input popup__input_user_about"
          id="profile-about-input" minlength="2" maxlength="200" required />
        <span className="popup__input-error profile-about-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="card"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" name="nameCard" placeholder="Название" className="popup__input popup__input_card_name"
          id="card-name-input" minlength="2" maxlength="30" required />
        <span className="popup__input-error card-name-input-error"></span>
        <input type="url" name="linkCard" placeholder="Ссылка на картинку" className="popup__input popup__input_card_link"
          id="card-link-input" required />
        <span className="popup__input-error card-link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" name="avatarLink" placeholder="Ссылка на картинку" className="popup__input popup__input_avatar"
          id="avatar-link-input" required />
        <span className="popup__input-error avatar-link-input-error" id="avatar_error"></span>
      </PopupWithForm>
      <ImagePopup />
      <PopupWithForm
        title="Вы уверены?"
        name="delete-card"
        buttonText="Да"
      >
      </PopupWithForm>
    </div>
  );
}

export default App;
