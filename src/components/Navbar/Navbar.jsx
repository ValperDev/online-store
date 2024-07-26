import Logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { collections } from '../../data/collections';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar__logo-link">
          <img src={Logo} alt="Online store logo" className="navbar__logo"/>
        </Link>
        <ul className="navbar__list">
          {collections.map(collection => (
            <li key={collection.id} className="navbar__item">
              <NavLink to={`/${collection.handle}`} className="navbar__link">{collection.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
