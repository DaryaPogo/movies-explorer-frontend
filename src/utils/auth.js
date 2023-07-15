//const BaseURL = "http://localhost:3000";
const BaseURL = 'https://api.diplom.dashapogo.nomoredomains.monster';

function getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (data) => {
  return fetch(`${BaseURL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(getResponse);
};

export const login = (data) => {
  return fetch(`${BaseURL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(getResponse)
    .then((data) => {
      localStorage.setItem("userId", data._id);
      return data;
    });
};

export const checkToken = () => {
  return fetch(`${BaseURL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResponse);
};

export const logout = () => {
  return fetch(`${BaseURL}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(getResponse);
};
