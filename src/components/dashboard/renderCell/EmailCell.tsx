import { Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';


export const EmailCell = (rowData: GridRenderCellParams) => (
  <Typography
    color='#1A0A00'
    sx={{
      fontSize: '14px',
      opacity: 1
    }}>
    {rowData.row.email}
  </Typography>
);
