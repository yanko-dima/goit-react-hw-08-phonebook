import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Typography } from '@mui/material';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container fixed>
        <Typography variant="h5" component="h1" color="inherit" gutterBottom>
          Phone Book
        </Typography>
        <ContactsForm />
        <Typography variant="h6" component="h2" color="inherit" gutterBottom>
          Contacts
        </Typography>
        <Filter />
        {isLoading && !error && <p>Loading ...</p>}
        {error && !isLoading && <p>{error}</p>}
        <ContactsList />
      </Container>
    </>
  );
}
