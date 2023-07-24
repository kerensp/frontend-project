import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import React from 'react';

interface ActionsCellProps {
  id: number;
  onDeleteClick: (id: number) => void;
  onEditClick: (id: number) => void;
}

export const ActionsCell = ({ id, onDeleteClick, onEditClick }: ActionsCellProps) => {
  return (
    <>
      <IconButton aria-label='editar' onClick={() => onEditClick(id)}>
        <EditIcon color='secondary' />
      </IconButton>
      <IconButton aria-label='eliminar' onClick={() => onDeleteClick(id)} >
        <DeleteIcon color='secondary' />
      </IconButton>
    </>
  );
};
