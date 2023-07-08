import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";

const SavedMovies = (props) => { 
  const {onDelete, onFilterMovies, movieCards, isLoading, isBtnPushed} = props;

  return (
    <main className="main">
      <SearchForm onFilterMovies={onFilterMovies} />
      <MoviesCardList movieCards={movieCards} isSaved={true} onDelete={onDelete} isLoading={isLoading} isBtnPushed={isBtnPushed}/>
    </main>
  );
};

export default SavedMovies;
