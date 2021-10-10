import { Link } from 'react-router-dom';

function Logo(): JSX.Element {
  return (
    <Link
      className='header__logo-link header__logo-link--active'
      to='/'
    >
      <img
        alt='6 cities logo'
        className='header__logo'
        height='41'
        src='img/logo.svg'
        width='81'
      />
    </Link>
  );
}

export default Logo;
