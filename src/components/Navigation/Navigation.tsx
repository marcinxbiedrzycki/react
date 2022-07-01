import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Navigation.module.css';

export interface NavigationProps {
  links: NavLinkProps[];
}

const Navigation: FC<NavigationProps> = ({ links }) => (
  <nav className={clsx({ [styles.nav]: true })}>
    {links.map(({ to, children }) => (
      <NavLink
        key={`nav-${to.toString()}`}
        to={to}
        className={({ isActive }) => clsx({ [styles.link]: true, [styles['link-active']]: isActive })}
      >
        {children}
      </NavLink>
    ))}
  </nav>
);

export default Navigation;
