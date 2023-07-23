import { Avatar, Typography } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';
import React from 'react';

export const NameCell = ({ row: { name, img } }: GridCellParams) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Avatar sx={{ width: '40px', height: '40px' }} src={img} />
      <Typography
        color='secondary'
        sx={{
          transitionDuration: '0.3s',
          fontSize: '14px',
          opacity: 1,
          '&:hover': {
            fontFamily: 'Roboto',
            textDecoration: 'underline',
            fontStyle: 'italic',
            fontSize: '16px',
            cursor: 'pointer',
            color: '#1A0A00',
          },
        }}>
        {name}
      </Typography>
    </div>
  );
};
