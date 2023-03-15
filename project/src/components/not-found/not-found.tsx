import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404. Page not found.</h1>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
