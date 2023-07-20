import { Box, Paper } from '@mui/material';
import BasicEditingGrid from '../components/dashboard/Dashboard';

export const Usuarios = () => {
  return (
    <Box
      component={Paper}
      sx={{
        m: '21px 18px 20px 303px',
        boxShadow: '0px 2px 3px #142F471F',
        overflow: 'hidden',
        width: '1600',
        height: '975',
      }}>
      <BasicEditingGrid />
    </Box>
  );
};
