import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from './Icon';

const navItems = [
  { to: '/planos', label: 'Planos' },
  { to: '/cobertura', label: 'Cobertura' },
  { to: '/business', label: 'Business' },
  { to: '/suporte', label: 'Suporte' },
  { to: '/pagamentos', label: 'Pagamentos' },
  { to: '/ajuda', label: 'Ajuda' },
  { to: '/contato', label: 'Contato' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" aria-label="NuvemNet Fibra, página inicial">
          <span className="logo__mark">
            <Icon name="cloud" size={22} />
          </span>
          <span className="logo__text">
            NuvemNet
            <small>Fibra óptica</small>
          </span>
        </Link>

        <nav className="nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav__link${isActive ? ' nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Link to="/area-do-cliente" className="btn btn--secondary">
            Área do cliente
          </Link>
          <Link to="/planos" className="btn btn--primary">
            Assinar agora
          </Link>
        </div>

        <button
          type="button"
          className="header__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <div className="container">
            <ul className="mobile-nav__list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="stack">
              <Link to="/area-do-cliente" className="btn btn--secondary btn--block">
                Área do cliente
              </Link>
              <Link to="/planos" className="btn btn--primary btn--block">
                Assinar agora
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
