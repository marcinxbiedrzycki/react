import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import ArticleList from '../../components/ArticleList';
import { ArticleProps } from '../../components/Article';
import Loading from '../../components/Loading';
import ButtonLink from '../../components/ButtonLink';

const List: FC = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState<ArticleProps[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/admin/articles`)
      .then((res) => res.json())
      .then((data: ArticleProps[]) => {
        setArticles(data);
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <h2>Lista artykułów</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ButtonLink to='/admin/add' className={clsx({ right: true })}>
            Dodaj nowy artykuł
          </ButtonLink>
          <ArticleList articles={articles} />
        </>
      )}
    </>
  );
};

export default List;
