import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilterQuery } from 'redux/filter/selectors';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilterQuery);

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  return (
    <ul className={css.contacts__list}>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
