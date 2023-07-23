import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

interface AddButtonProps {
  onAddRow: () => void;
}

export const AddButton = ({ onAddRow }: AddButtonProps) => {
  return (
    <Button
      variant='outlined'
      color='secondary'
      sx={{ width: '120px', ml: '11.11px', mr: '59px' }}
      startIcon={<AddIcon />}
      onClick={onAddRow}>
      Adicionar
    </Button>
  );
};