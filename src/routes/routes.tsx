import { Navigate, Route, Routes } from 'react-router-dom';
import { PermanentDrawer } from '../components/permanent-drawer/PermanentDrawer';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/initial-page' element={<PermanentDrawer />} />
      <Route path='/cities' element='{ <Cities />}' />
      <Route path='/people' element='{ <People />}' />
      <Route path='*' element={<Navigate to='/initial-page' />} />
    </Routes>
  );
};
