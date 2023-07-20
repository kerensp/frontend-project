import { Breadcrumbs, Link, Typography } from '@mui/material';

export const BreadcrumbsComponent = (
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
      Usuarios
    </Typography>
  </Breadcrumbs>
);
