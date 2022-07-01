import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import Box, { BoxProps } from './Box';

import styles from './Header.module.css';

const Header: FC = () => {
  const [headerData, setHeaderData] = useState<BoxProps[]>([]);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/header-info`)
      .then((res) => res.json())
      .then((data: BoxProps[]) => {
        setHeaderData(data);
      })
      .catch(() => {});
  }, []);

  return (
    <header className={clsx({ [styles.header]: true })}>
      <section className={clsx({ [styles['brand-section']]: true })}>
        <h1>Moje podróże</h1>
        <h2>małe i duże</h2>
      </section>
      <section className={clsx({ [styles['box-section']]: true })}>
        {headerData.map(({ title, value }) => (
          <Box key={title} title={title} value={value} />
        ))}
      </section>
    </header>
  );
};

export default Header;
