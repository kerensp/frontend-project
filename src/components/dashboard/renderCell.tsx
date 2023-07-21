/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Typography, Button, IconButton, } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { theme } from '../../utils';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import React from 'react';


export const NameCell = (rowData: GridRenderCellParams) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <Avatar sx={{ width: '40px', height: '40px' }} src={rowData.row.img} />
    <Typography
      color='secondary'
      sx={{
        transitionDuration: '0.5s',
        fontSize: '14px',
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


interface ActionsCellProps {
  id: number;
  onDelete: (id: number) => void;
}

export const ActionsCell = ({ id, onDelete }: ActionsCellProps) => {

  return (
    <>
      <IconButton aria-label="editar">
        <EditIcon />
      </IconButton>
      <IconButton aria-label="eliminar" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};