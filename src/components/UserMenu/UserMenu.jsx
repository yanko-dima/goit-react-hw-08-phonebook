import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login', { replace: true });
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.email}</p>
      <Button
        color="inherit"
        variant="outlined"
        size="small"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </div>
  );
};
