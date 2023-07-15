import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = (props) => {
  const {
    onFilterMovies,
    movieCards,
    onMovieLike,
    savedMovies,
    onDelete,
    isLoading,
    error,
  } = props;

  return (
    <>
      <SearchForm onFilterMovies={onFilterMovies} />
      <MoviesCardList
        movieCards={movieCards}
        onMovieLike={onMovieLike}
        savedMovies={savedMovies}
        onDelete={onDelete}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};

export default Movies;
