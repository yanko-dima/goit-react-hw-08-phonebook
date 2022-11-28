import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField } from '@mui/material';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from 'components/ContactsForm/ContactsForm.module.css';

export const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectAllContacts);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const checkedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkedContact) {
      toast.error(`Name: ${name} or Number: ${number} is already in contacts`);
    } else {
      toast.success(`Contact ${name} successful added`);
      dispatch(addContact({ name, number }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <TextField
        id="outlined-required"
        label="Name"
        type="text"
        name="name"
        onChange={handleChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="off"
        required
      />
      <TextField
        id="outlined-required"
        label="Number"
        type="tel"
        name="number"
        onChange={handleChange}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        autoComplete="off"
        required
      />
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </form>
  );
};
