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
      {/* <h1 className={css.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1> */}
      {/* <Paper
        style={{
          backgroundImage:
            'url(https://www.purrweb.com/images/fitforce-header-bg.svg)',
        }}
      >
        <Container maxWith="960px"></Container>
      </Paper> */}
    </div>
  );
}
