import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectAllContacts } from 'redux/contacts/selectors';
import { selectFilterQuery } from 'redux/filter/selectors';

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
    <List>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
