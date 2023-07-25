import { Button } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';


export const RolsCell = (rowData: GridRenderCellParams) => (
  <div style={{ display: 'flex', gap: 5 }}>
    {rowData.row.rols.map((rol: string, i: number) => (
      <Button
        key={i}
        variant='contained'
        sx={{
          backgroundColor: '#F4F1F7' ,
          opacity: 1,
          color: '#1A0A00',
          fontSize: '14px',
          mr: '15.32px',
          pointerEvents:'none'
        }}>
        <VerifiedIcon style={{color: '#4F2D80', width: '18px', height: '22px', marginRight: '9.83px'}} />
        {rol}
      </Button>
    ))}
  </div>
);
