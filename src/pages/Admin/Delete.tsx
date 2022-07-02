import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonLink from '../../components/ButtonLink';

const Delete: FC = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [isConfirmed, setConfirmation] = useState(false);

  useEffect(() => {
    if (!isConfirmed) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    fetch(`${process.env.REACT_APP_API_URL}/admin/articles/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigation('/admin');
      })
      .catch(() => {
        navigation('/admin');
      });
  }, [id, navigation, isConfirmed]);

  return (
    <>
      <h2>Usunięcie posta</h2>
      <p>Czy jesteś pewien, że chcesz usunąć posta?</p>
      <button type='button' onClick={() => setConfirmation(true)}>
        Usuń
      </button>
      <ButtonLink to='/admin' small>
        Nie usuwaj
      </ButtonLink>
    </>
  );
};

export default Delete;
