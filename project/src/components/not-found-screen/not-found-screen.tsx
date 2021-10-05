import { Link } from 'react-router-dom';

import { Footer, Header } from '../index';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Header />
      <section
        className='container'
        style={{ textAlign: 'center' }}
      >
        <h1>404. Page not found</h1>
        <Link to='/'>Вернуться на главную</Link>
      </section>
      <Footer />
    </>
  );
}

export default NotFoundScreen;
