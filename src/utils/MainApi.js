import { baseURL, movieAdress } from "../utils/utils";

export class mainApi {
  constructor() {
    this.baseURL = baseURL;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInfo() {
    return fetch(`${this.baseURL}/users/me`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then(this._getResponse);
  }

  editProfile({ name, email }) {
    return fetch(`${this.baseURL}/users/me`, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(this._getResponse);
  }

  getSavedMovies() {
    return fetch(`${this.baseURL}/movies`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(this._getResponse);
  }

  saveMovie(movie) {
    return fetch(`${this.baseURL}/movies`, {
      method: "POST",
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${movieAdress}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `${movieAdress}${movie.image.url}`,
        movieId: movie.id,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then(this._getResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this.baseURL}/movies/${movieId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then(this._getResponse);
  }
}

const moviesApi = new mainApi(baseURL);
export default moviesApi;
