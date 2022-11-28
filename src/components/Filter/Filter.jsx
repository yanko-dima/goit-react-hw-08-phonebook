import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import { changeFilter } from 'redux/filter/slice';
import { selectFilterQuery } from 'redux/filter/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterQuery);

  const handleFilterChange = e => {
    const query = e.currentTarget.value;
    dispatch(changeFilter(query));
  };

  return (
    <TextField
      sx={{
        m: '0 0 20px 0',
      }}
      fullWidth
      label="Find contacts by name or phone"
      id="search-contact"
      inputProps={{ 'aria-label': 'Find contacts by name or phone' }}
      type="text"
      name="filter"
      value={filterValue}
      onChange={handleFilterChange}
    />
  );
};
