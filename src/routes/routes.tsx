import { Route, Navigate, Routes } from 'react-router-dom';
import { Auditoría, Expedientes, Procesos, Roles, Trabajadores, Trazas, Usuarios } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/usuarios' element={<Usuarios />} />
      <Route path='/roles' element={<Roles />} />
      <Route path='/trazas' element={<Trazas />} />
      <Route path='/auditoría' element={<Auditoría />} />
      <Route path='/expedientes' element={<Expedientes />} />
      <Route path='/trabajadores' element={<Trabajadores />} />
      <Route path='/procesos' element={<Procesos />} />
      <Route path='*' element={<Navigate to='/usuarios' />} />
    </Routes>
  );
};
