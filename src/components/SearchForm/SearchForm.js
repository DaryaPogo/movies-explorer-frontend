import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search__form">
      <input
        name="search"
        placeholder="Фильм"
        type="text"
        className="search__adress"
      ></input>
      <button type="submit" className="search__button">
        Найти
      </button>
      <div className="search__wrapper">
        <label className="search__label">
          <input className="search__radio" type="checkbox"></input>
          <span className="search__text">Короткометражки</span>
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
