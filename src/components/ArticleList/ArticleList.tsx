import { FC } from 'react';
import clsx from 'clsx';
import { ArticleProps } from '../Article';

import styles from './ArticleList.module.css';
import ButtonLink from '../ButtonLink';

export interface ArticleListProps {
  articles: ArticleProps[];
}

const ListRow: FC<Omit<ArticleProps, 'slug' | 'content' | 'imageUrl'>> = ({ id, title, date, location }) => (
  <tr>
    <td>{title}</td>
    <td>{location.city}</td>
    <td>{date}</td>
    <td>
      <ButtonLink to={`/admin/edit/${id}`} small>
        Zmień
      </ButtonLink>
      <ButtonLink to={`/admin/delete/${id}`} small warning>
        Usuń
      </ButtonLink>
    </td>
  </tr>
);

const ArticleList: FC<ArticleListProps> = ({ articles }) => (
  <table className={clsx({ [styles.list]: true })}>
    <thead>
      <tr>
        <th>Tytuł</th>
        <th>Miasto</th>
        <th>Data</th>
        <th aria-label='Akcje' />
      </tr>
    </thead>
    <tbody>
      {articles.map(({ id, title, date, location }) => (
        <ListRow key={id} id={id} title={title} date={date} location={location} />
      ))}
    </tbody>
  </table>
);

export default ArticleList;
