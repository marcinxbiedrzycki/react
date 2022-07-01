import { FC } from 'react';
import clsx from 'clsx';

import styles from './Box.module.css';

export interface BoxProps {
  title: string;
  value: string;
}

const Box: FC<BoxProps> = ({ title, value }) => (
  <div className={clsx({ [styles.box]: true })}>
    <h5>{title}</h5>
    <span>{value}</span>
  </div>
);

export default Box;
