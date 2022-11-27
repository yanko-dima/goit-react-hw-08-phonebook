import css from './Home.module.css';

export default function Home() {
  return (
    <main className={css.container}>
      <h1 className={css.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </main>
  );
}
