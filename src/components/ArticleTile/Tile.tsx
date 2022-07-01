import { FC } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Tile.module.css';

export interface TileProps {
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
}

const Tile: FC<TileProps> = ({ slug, title, date, imageUrl }) => (
  <Link to={`/article/${slug}`} className={clsx({ [styles.tile]: true })}>
    <div>{title}</div>
    <div>{date}</div>
    <img src={imageUrl} alt={title} />
  </Link>
);

export default Tile;
