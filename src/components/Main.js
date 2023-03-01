function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
}) {
    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={onEditAvatar}>
                    <img src="#" alt="аватарка" className="profile__avatar" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__name">Имя пользавателя</h1>
                    <button className="profile__edit-button opacity" onClick={onEditProfile} aria-label="Редактировать профиль" type="button"></button>
                    <p className="profile__about">Описание пользавателя</p>
                </div>
                <button className="profile__add-button opacity" onClick={onAddPlace} aria-label="Добавить" type="button"></button>
            </section>
            <section className="elements">
                <ul className="element">

                </ul>
            </section>
        </main>
    );
}

export default Main;