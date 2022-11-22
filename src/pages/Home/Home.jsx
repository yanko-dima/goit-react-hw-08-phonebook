import css from './Home.mobule.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
