import { FC, useEffect, useState } from 'react';
import Tile, { ArticleTileList, TileProps } from '../components/ArticleTile';

const Index: FC = () => {
  const [articles, setArticles] = useState<TileProps[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/articles/1`)
      .then((res) => res.json())
      .then((data: TileProps[]) => {
        setArticles(data);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <p>Cześć, mam na imię John i chciałbym opowiedzieć i zabrać Cię w daleką podróż.</p>
      <p>Zaczynajmy! Wybierz pierwszą historię, którą chcesz poznać z kafelków poniżej.</p>
      <h3>Moje ostatnie wojaże</h3>
      <ArticleTileList>
        {articles.map(({ slug, title, date, imageUrl }) => (
          <Tile key={slug} slug={slug} title={title} date={date} imageUrl={imageUrl} />
        ))}
      </ArticleTileList>
    </>
  );
};

export default Index;
