import clsx from 'clsx';
import { FC, useState } from 'react';

import styles from './Article.module.css';

export interface ArticleProps {
  id: string;
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  location: {
    city: string;
    latitude: string;
    longitude: string;
  };
  content: string;
}

const Article: FC<ArticleProps> = ({ id, slug, title, location, date, imageUrl, content }) => {
  const [showDebug, setDebug] = useState(false);
  const toggleDebug = () => setDebug(!showDebug);

  return (
    <article className={clsx({ [styles.article]: true })}>
      <section className={clsx({ [styles.heading]: true })}>
        <h1>{title}</h1>
        <p>
          Cel podróży: <strong>{location.city}</strong>.
        </p>
        <p>
          Data podróży: <strong>{date}</strong>.
        </p>
      </section>
      <section className={clsx({ [styles.image]: true })}>
        <img src={imageUrl} alt={title} height={180} />
      </section>
      <section className={clsx({ [styles.content]: true })}>
        <hr />
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: content }} />
        <button type='button' onClick={toggleDebug}>
          {showDebug ? 'HIDE' : 'SHOW'} DEBUG INFO
        </button>
        {showDebug && (
          <pre>
            <code>
              id: <strong>{id}</strong>
              <br />
              slug: <strong>{slug}</strong>
              <br />
              title: <strong>{title}</strong>
              <br />
              date: <strong>{date}</strong>
              <br />
              imageUrl: <strong>{imageUrl}</strong>
              <br />
              location.city: <strong>{location.city}</strong>
              <br />
              location.latitude: <strong>{location.latitude}</strong>
              <br />
              location.longitude: <strong>{location.longitude}</strong>
              <br />
              content: <strong>{content}</strong>
            </code>
          </pre>
        )}
      </section>
    </article>
  );
};

export default Article;
