import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { encodeFile } from '../../utils/base64';
import ArticleForm, { ArticleFormProps } from '../../components/ArticleForm';

const Add: FC = () => {
  const navigate = useNavigate();

  const submitForm = (data: ArticleFormProps) => {
    encodeFile(data.imageUrl[0])
      .then((image) =>
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        fetch(`${process.env.REACT_APP_API_URL}/admin/articles`, {
          method: 'POST',
          body: JSON.stringify({
            ...data,
            image,
            imageUrl: undefined,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(() => {
          navigate('/admin');
        })
      )
      .catch(() => {});
  };

  return <ArticleForm onSubmit={submitForm} />;
};

export default Add;
