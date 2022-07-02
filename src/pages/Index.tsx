import { FC, useEffect, useState } from 'react';
import { ArticleProps } from '../components/Article';
import Tile, { ArticleTileList } from '../components/ArticleTile';
import Map from '../components/Map';
import Loading from '../components/Loading';

const Index: FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/articles/1`)
      .then((res) => res.json())
      .then((data: ArticleProps[]) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <p>Cześć, mam na imię John i chciałbym opowiedzieć i zabrać Cię w daleką podróż.</p>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <p>Zaczynajmy! Wybierz pierwszą historię, którą chcesz poznać z kafelków poniżej.</p>
          <h3>Moje ostatnie wojaże</h3>
          <ArticleTileList>
            {articles.map(({ slug, title, date, imageUrl }) => (
              <Tile key={slug} slug={slug} title={title} date={date} imageUrl={imageUrl} />
            ))}
          </ArticleTileList>
          <h3>Mapa</h3>
          <Map
            markers={articles.map((article) => ({
              articleSlug: article.slug,
              city: article.location.city,
              latitude: Number(article.location.latitude),
              longitude: Number(article.location.longitude),
            }))}
          />
        </>
      )}
    </>
  );
};

export default Index;
