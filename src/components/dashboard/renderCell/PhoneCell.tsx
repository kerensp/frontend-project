import { Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';

export const PhoneCell = (rowData: GridRenderCellParams) => (
  <Typography
    color='#1A0A00'
    sx={{
      fontSize: '14px',
    }}>
    {rowData.row.phone}
  </Typography>
);
