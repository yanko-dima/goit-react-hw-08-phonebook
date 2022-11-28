import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IconButton, ListItem } from '@mui/material';
import { deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import css from 'components/ContactItem/ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const normaliseName = `${name[0].toUpperCase()}${name.slice(1)}`;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ListItem disablePadding className={css.contacts__item}>
        <div className={css.wrapper}>
          <p>
            {normaliseName} | {number}
          </p>

          <IconButton aria-label="delete" onClick={handleDelete} size="large">
            <DeleteIcon />
          </IconButton>
        </div>
      </ListItem>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
