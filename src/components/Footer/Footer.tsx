import clsx from 'clsx';

import styles from './Footer.module.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={clsx({ [styles.footer]: true })}>
      Copyright &copy; {year} <strong>000000</strong> s13448 Marcin Biedrzycki
    </footer>
  );
};

export default Footer;
