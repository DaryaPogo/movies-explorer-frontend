import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";

function App() {
  const [isEditNavigation, setEditNavigation] = useState(false);

  const currentPath = window.location.pathname;

  function handleEditNavigation() {
    setEditNavigation(!isEditNavigation);
  }

  function closePopup() {
    setEditNavigation(false);
  }

  return (
    <>
      {(currentPath === "/saved-movies" ||
        currentPath === "/movies" ||
        currentPath === "/profile" ||
        currentPath === "/") && (
        <Header
          isLoggedIn={true}
          onEditNavigation={() => {
            handleEditNavigation(true);
          }}
        />
      )}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/saved-movies" element={<SavedMovies />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Navigation isOpen={isEditNavigation} onClose={closePopup} />
      {(currentPath === "/saved-movies" ||
        currentPath === "/movies" ||
        currentPath === "/") && (
        <Footer/>
      )}
    </>
  );
}

export default App;
