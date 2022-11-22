import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { MdClose } from 'react-icons/md';
import css from 'components/ContactItem/ContactItem.module.css';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const normaliseName = `${name[0].toUpperCase()}${name.slice(1)}`;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contacts__item}>
      <div className={css.wrapper}>
        <p className={css.text}>
          {normaliseName} | {phone}
        </p>
        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
