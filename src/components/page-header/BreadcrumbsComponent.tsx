import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const BreadcrumbsComponent = () => {
  const location = useLocation();

  // Obtener la última sección de la ruta actual
  const lastSection = location.pathname.split('/').pop()?.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <Breadcrumbs
      sx={{
        display: 'flex',
        ml: '326px',
        color: '#464646',
        opacity: 1,
        fontSize: '14px',
        cursor: 'default',
      }}>
      <Link underline='none' color='inherit' href='/'>
        Inicio
      </Link>
      <Link underline='none' color='inherit' href='/'>
        Administración
      </Link>
      <Typography sx={{ color: '#4F2D80', opacity: 1, fontSize: '14px' }}>
        {lastSection}
      </Typography>
    </Breadcrumbs>
  );
};