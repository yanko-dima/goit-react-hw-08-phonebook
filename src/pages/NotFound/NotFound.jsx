import { Container, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Container className={css.wrapper} fixed>
        <Typography
          className={css.title}
          variant="h2"
          component="h1"
          color="inherit"
          gutterBottom
        >
          Error 404
        </Typography>
        <p className={css.subTitle}>Page Not Found</p>
      </Container>
    </>
  );
}
