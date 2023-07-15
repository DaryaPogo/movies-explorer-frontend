import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";

const SavedMovies = (props) => {
  const { onDelete, movieCards, handeleSavedFilterMovies, } = props;

  return (
    <main className="main">
      <SearchForm onFilterMovies={handeleSavedFilterMovies} />
      <MoviesCardList
        movieCards={movieCards}
        onDelete={onDelete}
      />
    </main>
  );
};

export default SavedMovies;
