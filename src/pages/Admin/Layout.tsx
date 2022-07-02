import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: FC = () => (
  <>
    <h3 style={{ color: '#FF0000', textTransform: 'uppercase' }}>Nieupoważnionym wstęp wzbroniony</h3>
    <hr />
    <Outlet />
  </>
);

export default AdminLayout;
