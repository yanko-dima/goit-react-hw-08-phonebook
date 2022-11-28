import { Button, Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container fixed>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-required-email"
          label="email"
          type="email"
          name="email"
          autoComplete="off"
          required
        />
        <TextField
          id="outlined-required-password"
          label="password"
          type="emapasswordil"
          name="password"
          autoComplete="off"
          required
        />
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </form>
    </Container>
  );
};
