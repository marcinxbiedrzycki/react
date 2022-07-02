import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import clsx from 'clsx';

import styles from './ButtonLink.module.css';

interface ButtonLinkProps {
  to: LinkProps['to'];
  className?: string;
  small?: boolean;
  warning?: boolean;
  children: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ children, to, className = '', small = false, warning = false }) => (
  <Link to={to}>
    <button
      type='button'
      className={clsx({ [styles.button]: true, [styles.small]: small, [styles.warning]: warning, [className]: true })}
    >
      {children}
    </button>
  </Link>
);

export default ButtonLink;
