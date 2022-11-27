import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import css from './AuthNav.module.css';
import { Stack } from '@mui/system';

export const AuthNav = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const hahdleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      <Stack direction="row" spacing={3}>
        <Button
          color="inherit"
          variant="outlined"
          size="small"
          onClick={handleLoginClick}
        >
          Log In
        </Button>
        <Button variant="contained" size="small" onClick={hahdleRegisterClick}>
          Register
        </Button>
      </Stack>
    </div>
  );
};
