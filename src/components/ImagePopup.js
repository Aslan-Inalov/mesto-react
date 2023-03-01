function ImagePopup() {
    return(
        <div className="popup popup_picture">
        <div className="popup__picture-container">
          <img className="popup__image" src="#" alt="#" />
          <p className="popup__picture-text"></p>
          <button type="button" className="popup__close-button opacity" aria-label="Закрыть попап"></button>
        </div>
      </div>
    )
}

export default ImagePopup;