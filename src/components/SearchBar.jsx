import React, { useContext } from 'react';
import { SearchBarContext } from '../context/SearchBarProvider';

function SearchBar() {
  const {
    handleFilter,
    handleFilteredRecipes,
  } = useContext(SearchBarContext);

  return (
    <form>
      <input
        data-testid="search-input"
        type="text"
        name="inputSearch"
        placeholder="Search Recipes"
        onChange={ handleFilter }
      />
      <section>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="ingredient"
              data-testid="ingredient-search-radio"
              onChange={ handleFilter }
            />
            Ingredient
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="name"
              data-testid="name-search-radio"
              onChange={ handleFilter }
            />
            Name
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="first letter"
              data-testid="first-letter-search-radio"
              onChange={ handleFilter }
            />
            First letter
          </label>
        </div>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleFilteredRecipes }
        >
          SEARCH
        </button>
      </section>
    </form>
  );
}

export default SearchBar;
