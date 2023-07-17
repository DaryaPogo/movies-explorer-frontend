import { adress } from "../utils/utils";

export class MoviesApi {
  constructor(adress) {
    this.adress = adress;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this.adress, {
      method: "GET",
      headers:  {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._getResponse);
  }

}

const moviesApi = new MoviesApi(adress);
export default moviesApi;
