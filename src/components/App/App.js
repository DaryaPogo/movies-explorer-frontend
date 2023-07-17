import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import HeaderMain from "../HeaderMain/HeaderMain";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { register, checkToken, login, logout } from "../../utils/auth";

function App() {
  const [isEditNavigation, setEditNavigation] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => {
    if (localStorage.getItem("userId")) {
      return true;
    } else {
      return false;
    }
  });
  const [currentUser, setCurrentUser] = useState([]);
  const [movies, setMovies] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [savedFiltredMovies, setSavedFitredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isSavedSearch, setIsSavedSearch] = useState(false);

  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  useEffect(() => {
    const jwt = localStorage.getItem("userId");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.email);
          setName(res.name);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      mainApi
        .getInfo()
        .then((currentUser) => {
          setCurrentUser(currentUser);
          setLoggedIn(true);
        })
        .catch((err) => {
          localStorage.removeItem("userId");
          console.log(err);
        });
      mainApi
        .getSavedMovies()
        .then((res) => setSavedMovies(res))
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === "Escape") {
        closePopup();
      }
    }
    if (isEditNavigation) {
      document.addEventListener("keydown", closeByEscape);
      return () => {
        document.removeEventListener("keydown", closeByEscape);
      };
    }
  }, [isEditNavigation]);

  useEffect(() => {
    moviesApi.getMovies().then((res) => {
      setMovies(res);
    });
    setFiltredMovies(JSON.parse(localStorage.getItem("movies")) || []);
  }, []);

  useEffect(() => {
    if (localStorage["search"]) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [filtredMovies]);

  useEffect(() => setSavedFitredMovies(savedMovies), [savedMovies]);

  function handleEditNavigation() {
    setEditNavigation(!isEditNavigation);
  }

  function closePopup() {
    setEditNavigation(false);
    setPopupOpen(false);
  }

  function handleRegister(data) {
    setIsLoading(true);
    return register(data)
      .then(() => {
        const value = { email: data.email, password: data.password };
        handleLogin(value);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        setPopupOpen(true);
      })
      .finally(() => setIsLoading(false));
  }

  function handleLogin(data) {
    setIsLoading(true);
    return login(data)
      .then((res) => {
        if (res._id) {
          localStorage.setItem("userId", res._id);
          navigate("/movies");
          setLoggedIn(true);
          setEmail(data.email);
          setName(res.name);
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupOpen(true);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignout(jwt) {
    return logout()
      .then(() => {
        setFiltredMovies([]);
        localStorage.removeItem("userId");
        localStorage.removeItem("search");
        localStorage.removeItem("isShort");
        localStorage.removeItem("movies");
        navigate("/");
        setLoggedIn(false);
        setEmail("");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditProfile({ name, email }) {
    setIsLoading(true);
    mainApi
      .editProfile({ name, email })
      .then(() => {
        setCurrentUser({ ...currentUser, name, email });
        setPopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleGetMovies() {
    mainApi
      .getSavedMovies()
      .then((res) => setSavedMovies(res))
      .catch((err) => console.log(err));
  }

  function handleMovieSave(movie) {
    mainApi
      .saveMovie(movie)
      .then(() => handleGetMovies())
      .catch((err) => console.log(err));
  }

  function handleDeleteSavedMovie(movie) {
    handleGetMovies();
    const deleteMovie = savedMovies.find((c) => c.movieId === movie.id);
    const deletedId =
      currentPath === "/saved-movies" ? movie._id : deleteMovie._id;
    mainApi
      .deleteMovie(deletedId)
      .then(() => {
        setSavedFitredMovies(() =>
          savedFiltredMovies.filter((c) => c._id !== movie._id)
        );
        handleGetMovies();
      })
      .catch((err) => console.log(err));
  }

  function filterMovie(movie, search, isShort) {
    if (isShort) {
      return (
        (movie.nameRU.toLowerCase().includes(search) ||
          movie.nameEN.toLowerCase().includes(search)) &&
        movie.duration < 40
      );
    } else {
      return (
        movie.nameRU.toLowerCase().includes(search) ||
        movie.nameEN.toLowerCase().includes(search)
      );
    }
  }

  function handleFilterMovies(search, isShort) {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        setFiltredMovies(
          movies.filter((item) => filterMovie(item, search, isShort))
        );
        localStorage.setItem(
          "movies",
          JSON.stringify(
            movies.filter((item) => filterMovie(item, search, isShort))
          )
        );
        setIsSearch(true);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handeleSavedFilterMovies(search, isShort) {
    setSavedFitredMovies(
      savedMovies.filter((item) => filterMovie(item, search, isShort))
    );
    setIsSavedSearch(true);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {(currentPath === "/saved-movies" ||
        currentPath === "/movies" ||
        currentPath === "/profile") && (
        <Header
          onEditNavigation={() => {
            handleEditNavigation(true);
          }}
          onSubmit={handleSignout}
          isOpen={isEditNavigation}
          onClose={closePopup}
        />
      )}
      {currentPath === "/" && (
        <HeaderMain
          onEditNavigation={() => {
            handleEditNavigation(true);
          }}
          isLoggedIn={loggedIn}
          isOpen={isEditNavigation}
          onClose={closePopup}
          onSubmit={handleSignout}
        />
      )}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route element={<ProtectedRoute loggedIn={!loggedIn} />}>
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                isOpen={isPopupOpen}
                onClose={closePopup}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                isOpen={isPopupOpen}
                onClose={closePopup}
                isLoading={isLoading}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route
            exact
            path="/saved-movies"
            element={
              <SavedMovies
                onDelete={handleDeleteSavedMovie}
                movieCards={savedFiltredMovies}
                handeleSavedFilterMovies={handeleSavedFilterMovies}
                isSearch={isSavedSearch}
              />
            }
          />
          <Route
            exact
            path="/movies"
            element={
              <Movies
                movieCards={filtredMovies}
                onMovieLike={handleMovieSave}
                onDelete={handleDeleteSavedMovie}
                isLoading={isLoading}
                error={error}
                savedMovies={savedMovies}
                onFilterMovies={handleFilterMovies}
                isSearch={isSearch}
              />
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Profile
                onEdit={handleEditProfile}
                onSubmit={handleSignout}
                isOpen={isPopupOpen}
                onClose={closePopup}
                isLoading={isLoading}
              />
            }
          />
        </Route>
      </Routes>
      {(currentPath === "/saved-movies" ||
        currentPath === "/movies" ||
        currentPath === "/") && <Footer />}
    </CurrentUserContext.Provider>
  );
}

export default App;
