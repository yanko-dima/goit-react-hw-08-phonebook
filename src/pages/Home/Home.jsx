import Typography from '@mui/material/Typography';

import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <Typography variant="h3" component="h1" color="inherit" gutterBottom>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Typography>
    </div>
  );
}
