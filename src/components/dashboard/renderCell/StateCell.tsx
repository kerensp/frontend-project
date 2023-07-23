import { Button } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';

export const StateCell = (rowData: GridRenderCellParams) => {
  // Inicializa el estado local del botón con el estado actual de la fila
  const [status, setStatus] = useState(rowData.row.status);

  // Define el manejador de eventos para el clic del botón
  const handleClick = () => {
    const newStatus = status === 'Activo' ? 'Bloqueado' : 'Activo';
    setStatus(newStatus);

    // Actualiza el estado de la fila en la tabla
    rowData.api.updateRows([{ ...rowData.row, status: newStatus }]);
  };

  // Renderiza el botón con el estilo correspondiente según el estado actual
  return (
    <Button
      variant='contained'
      sx={{ textTransform: 'none', color: '#F6F6F6', fontSize: '14px' }}
      color={status === 'Activo' ? 'success' : 'error'}
      onClick={handleClick}>
      {status}
    </Button>
  );
};
