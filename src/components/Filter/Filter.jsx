import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
  selectOnlyFavoriteFilter,
  selectTitleFilter,
  selectAuthorFilter,
} from "../../redux/slices/filterSlice";
import "./Filter.css";

function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };
  const handleResetFilter = () => {
    dispatch(resetFilters());
  };
  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };
  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            type='text'
            placeholder='Filter by title...'
            value={titleFilter}
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className='filter-group'>
          <input
            type='text'
            value={authorFilter}
            placeholder='Filter by author...'
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className='filter-group'>
          <label>
            <input
              type='checkbox'
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only Favorite
          </label>
        </div>
        <button type='button' onClick={handleResetFilter}>
          Reset filter
        </button>
      </div>
    </div>
  );
}

export default Filter;
