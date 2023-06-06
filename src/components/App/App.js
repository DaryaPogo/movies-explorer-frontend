import "./App.css";
import { Route, Routes, useLocation  } from "react-router-dom";
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
import HeaderMain from "../HeaderMain/HeaderMain";

function App() {
  const [isEditNavigation, setEditNavigation] = useState(false);

  const currentPath = window.location.pathname;

  const location = useLocation();

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
        currentPath === "/profile") && (
        <Header
          onEditNavigation={() => {
            handleEditNavigation(true);
          }}
          isOpen={isEditNavigation} 
          onClose={closePopup}
        />
      )}
      {currentPath === "/" && <HeaderMain />}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/saved-movies" element={<SavedMovies />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {(currentPath === "/saved-movies" ||
        currentPath === "/movies" ||
        currentPath === "/") && <Footer />}
    </>
  );
}

export default App;
