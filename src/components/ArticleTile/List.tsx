import { FC, ReactElement } from 'react';
import clsx from 'clsx';

import styles from './List.module.css';

export interface ListProps {
  children: ReactElement | ReactElement[];
}

const List: FC<ListProps> = ({ children }) => <div className={clsx({ [styles.list]: true })}>{children}</div>;

export default List;
