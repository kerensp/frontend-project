import { Avatar, Typography, Button, } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { theme } from '../../utils';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


export const renderCellName = (rowData: GridRenderCellParams) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
    <Avatar sx={{ width: 36, height: 36 }} src={rowData.row.img} />
    <Typography
      color='secondary'
      sx={{
        transitionDuration: '0.5s',
        fontSize: '0.9rem',
        '&:hover': {
          fontFamily: 'cursive',
          textDecoration: 'underline',
          fontStyle: 'italic',
          fontSize: '1rem',
          cursor: 'pointer',
        },
      }}>
      {rowData.row.name}
    </Typography>
  </div>
);

export const renderCellForState = (rowData: GridRenderCellParams) => (
  <Button
    variant='contained'
    sx={{ textTransform: 'none', color: '#fff' }}
    color={rowData.row.status === 'Activo' ? 'success' : 'error'}
    size='small'
    onClick={() => {
      console.log('Edit button clicked for row ' + rowData.id);
    }}>
    {rowData.row.status}
  </Button>
);

export const renderCellForRols = (rowData: GridRenderCellParams) => (
  <div style={{ display: 'flex', gap: 5 }}>
    {rowData.row.rols.map((rol: string, i: number) => (
      <Button
        key={i}
        color='secondary'
        sx={{
          textTransform: 'none',
          color: theme.palette.primary.main,
          gap: '.2rem',
          '&:hover': {
            background: theme.palette.secondary.main,
            color: theme.palette.primary.main,
            boxShadow: 'none',
          },
        }}
        variant='contained'
        size='small'>
        <VerifiedUserIcon sx={{ fontSize: '1.2rem' }} />
        {rol}
      </Button>
    ))}
  </div>
);