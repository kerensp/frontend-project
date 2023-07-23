import styled from '@emotion/styled';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)({
  cursor: 'pointer',
  marginTop: '30.6px',
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: '#E8E8E8',
    color: '#2C2E35',
    fontSize: '17px',
    opacity: '0.8',
    '&:focus-within': {
      outline: 'none',
    },
  },
  '& .MuiDataGrid-row': {
    focusable: false,
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      outline: 'none',
      border:'none'
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '& .MuiDataGrid-cell': {
    '&:focus': {
      outline: 'none',
    },
  }
});
