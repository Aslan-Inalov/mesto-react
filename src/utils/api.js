class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }


    _request(url, options) {
        return fetch(url, options).then(this._checkResponse)
    }


    getInitialCards() {
        return this._request(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        });
    }

    getUserInfo() {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers,
        });
    }

    updateUser(formValues) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: formValues.name,
                about: formValues.about
            })
        });
    }

    addNewCard(data) {
        return this._request(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        });
    }

    removeCard(id) {
        return this._request(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers,
        });
    }

    changeLikeCardStatus(id, isLiked) {
        return this._request(`${this._baseUrl}/cards/likes/${id}`, {
            method: `${!isLiked ? "DELETE" : "PUT"}`,
            headers: this._headers,
        });
    }

    updateAvatar(link) {
        return this._request(`${this._baseUrl}/users/me/avatar `, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link.avatar,
            })
        });
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
    headers: {
        authorization: '69687510-6f1e-41ab-ba6a-15288c72162a',
        'Content-Type': 'application/json'
    }
});