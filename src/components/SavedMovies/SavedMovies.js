import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm"

const SavedMovies = () => {
  return (
    <main className="main">
      <SearchForm/>
      <MoviesCardList isSaved={true}/>
    </main>
  );
};

export default SavedMovies;
