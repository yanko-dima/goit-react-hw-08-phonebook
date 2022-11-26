import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter/slice';
import { selectFilterQuery } from 'redux/filter/selectors';
import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterQuery);

  const handleFilterChange = e => {
    const query = e.currentTarget.value;
    dispatch(changeFilter(query));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        <span className={css.label}>{'Find contacts by name'}</span>
        <input
          className={css.field}
          type="text"
          name="filter"
          value={filterValue}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
