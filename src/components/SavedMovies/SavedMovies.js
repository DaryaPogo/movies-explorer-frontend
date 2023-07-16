import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";

const SavedMovies = (props) => {
  const { onDelete, movieCards, handeleSavedFilterMovies, isSearch } = props;

  return (
    <main className="main">
      <SearchForm onFilterMovies={handeleSavedFilterMovies} />
      <MoviesCardList
        movieCards={movieCards}
        onDelete={onDelete}
        isSearch={isSearch}
      />
    </main>
  );
};

export default SavedMovies;
