import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = (props) => {
  const { onFilterMovies, movieCards, onMovieLike, isSaved, onDelete, isLoading, error, isBtnPushed } = props;
  return (
    <>
      <SearchForm onFilterMovies={onFilterMovies}/>
      <MoviesCardList
        movieCards={movieCards}
        onMovieLike={onMovieLike}
        isSaved={isSaved}
        onDelete={onDelete}
        isLoading={isLoading}
        error={error}
        isBtnPushed={isBtnPushed}
      />
    </>
  );
};

export default Movies;
