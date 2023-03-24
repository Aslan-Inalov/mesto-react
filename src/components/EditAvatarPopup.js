import PopupWithForm from "./PopupWithForm";
import { useEffect, useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = useRef("");

    useEffect(() => {
        avatarRef.current.value = "";
    }, [isOpen]);

    function handleChangeAvatar() {
        return avatarRef.current.value;
    }

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        < PopupWithForm
            title="Обновить аватар"
            name="avatar"
            buttonText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                type="url"
                name="avatar"
                placeholder="Ссылка на картинку"
                className="popup__input popup__input_avatar"
                id="avatar-link-input"
                onChange={handleChangeAvatar}
                ref={avatarRef}
                required
            />
            <span className="popup__input-error avatar-link-input-error" id="avatar_error"></span>
        </PopupWithForm >
    )
}

export default EditAvatarPopup