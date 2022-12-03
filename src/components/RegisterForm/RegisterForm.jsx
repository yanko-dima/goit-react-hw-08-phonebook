import { Button, Container, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Container fixed>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-required-name"
          label="Username"
          type="text"
          name="name"
          autoComplete="off"
          required
        />
        <TextField
          id="outlined-required-email"
          label="Email"
          type="email"
          name="email"
          autoComplete="off"
          required
        />
        <TextField
          id="outlined-required-password"
          label="Password"
          type="emapasswordil"
          name="password"
          autoComplete="off"
          required
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </Container>
  );
};
