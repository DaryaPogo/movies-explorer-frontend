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
  const [isPopupSuccess, setPopupSuccess] = useState(false);
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

  useEffect(() => setSavedFitredMovies(savedMovies), [savedMovies]);

  function handleEditNavigation() {
    setEditNavigation(!isEditNavigation);
  }

  function closePopup() {
    setEditNavigation(false);
    setPopupSuccess(false);
  }

  function handleRegister(data) {
    return register(data)
      .then((res) => {
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(data) {
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
      });
  }

  function handleSignout(jwt) {
    return logout()
      .then(() => {
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
    mainApi
      .editProfile({ name, email })
      .then(() => {
        setCurrentUser({ ...currentUser, name, email });
        setPopupSuccess(true);
      })
      .catch((err) => {
        console.log(err);
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
      return movie.duration < 40;
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
        localStorage.setItem('movies', JSON.stringify(movies.filter((item) => filterMovie(item, search, isShort))))
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
                handleLogin={handleLogin}
              />
            }
          />
          <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
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
                isOpen={isPopupSuccess}
                onClose={closePopup}
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
