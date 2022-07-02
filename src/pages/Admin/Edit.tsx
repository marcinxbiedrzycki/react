import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArticleForm, { ArticleFormProps } from '../../components/ArticleForm';
import { ArticleProps } from '../../components/Article';
import Loading from '../../components/Loading';
import navigation from '../../components/Navigation';

const Edit: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    fetch(`${process.env.REACT_APP_API_URL}/admin/articles/${id}`)
      .then((res) => res.json())
      .then((data: ArticleProps) => {
        setArticle(data);
        setLoading(false);
      })
      .catch(() => {});
  }, [id, navigation]);

  if (isLoading) {
    return <Loading />;
  }

  const submitForm = (data: ArticleFormProps) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/admin/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        ...data,
        imageUrl: undefined,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/admin');
      })
      .catch(() => {});
  };

  return <ArticleForm onSubmit={submitForm} data={article} />;
};

export default Edit;
