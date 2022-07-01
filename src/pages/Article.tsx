import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Article, { ArticleProps } from '../components/Article';

const About: FC = () => {
  const { slug } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [article, setArticle] = useState<ArticleProps>({
    id: '',
    slug: '',
    title: '',
    date: '',
    imageUrl: '',
    location: { city: '', latitude: '', longitude: '' },
    content: '',
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/article/${slug}`)
      .then((res) => res.json())
      .then((data: ArticleProps) => {
        setArticle(data);
        setLoading(false);
      })
      .catch(() => {});
  }, [slug]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Article
      id={article.id}
      slug={article.slug}
      title={article.title}
      date={article.date}
      imageUrl={article.imageUrl}
      location={article.location}
      content={article.content}
    />
  );
};

export default About;
