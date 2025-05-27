import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#eee' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem' }}>Главная</Link>
        <Link to="/about">О сайте</Link>
      </nav>
    </header>
  );
};

export default Header;