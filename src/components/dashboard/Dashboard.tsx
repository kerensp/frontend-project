import * as React from 'react';
import { DataGrid, GridCellParams, GridColDef, esES } from '@mui/x-data-grid';
import { randomCreatedDate } from '@mui/x-data-grid-generator';
import { ActionsCell, NameCell, } from './renderCell';
import { Box, Button, IconButton, InputBase, Paper, Typography, styled } from '@mui/material';
import Row from '../../types/custom';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import CreateDate from './createDate';


const StyledDataGrid = styled(DataGrid)({
  cursor: 'pointer',
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
    },

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
});

export default function BasicEditingGrid() {

  const [rows, setRows] = React.useState<Row[]>([
    {
      id: 1,
      name: 'Rosemary Casanova',
      email: 'quiones@yahoo.com',
      tel: '+53 55555555',
      status: 'Activo',
      rols: ['Usuario', 'Super Admin'],
      dateCreated: new Date('2022-06-02T20:43:00'),
    },
    {
      id: 2,
      name: 'Ruby Lemus',
      email: 'antonia49@yahoo.com',
      tel: '+53 55555555',
      status: 'Activo',
      rols: ['Usuario'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 3,
      name: 'Bill Arenas',
      email: 'vliz90@yahoo.com',
      tel: '+53 55555555',
      status: 'Bloqueado',
      rols: ['Usuario'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 4,
      name: 'Clint Samaniego',
      email: 'vanabria@gmail.com',
      tel: '-',
      status: 'Activo',
      rols: ['Usuario', 'Dtor. Unidad'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 5,
      name: 'Jacob Leiva',
      email: 'escobedo@hotmail.com',
      tel: '-',
      status: 'Activo',
      rols: ['Usuario'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 6,
      name: 'Brent Orta',
      email: 'ortiz70@yahoo.com',
      tel: '+53 55555555',
      status: 'Bloqueado',
      rols: ['Usuario', 'Super Admin'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 7,
      name: 'Rosemary Casanova',
      email: 'quiones@yahoo.com',
      tel: '+53 55555555',
      status: 'Bloqueado',
      rols: ['Usuario', 'Super Admin'],
      dateCreated: randomCreatedDate(),
    },
  ]);

  const handleAddRow = () => {
    const newRow: Row = {
      id: rows.length + 1,
      name: '',
      email: '',
      tel: '',
      status: '',
      rols: [],
      dateCreated: new Date(),
    };
    setRows([...rows, newRow]);
  };

  const [filterValue, setFilterValue] = React.useState('');

  const handleFilterChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  }, []);
  
  const filteredRows = rows.filter((row) => row.name.toLowerCase().includes(filterValue.toLowerCase()));
  
  const handleDelete = React.useCallback((id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  }, [rows]);

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nombre de usuario',
      align: 'left',
      headerAlign: 'left',
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: NameCell,
    },
    {
      field: 'email',
      headerName: 'Correo electrónico',
      align: 'left',
      headerAlign: 'left',
      flex: 1,
      sortable: false,
      filterable: false,
    },
    {
      field: 'cel',
      headerName: 'Teléfono',
      align: 'left',
      headerAlign: 'left',
      flex: 0.6,
      sortable: false,
      filterable: false,
    },
    {
      field: 'status',
      headerName: 'Estado',
      align: 'left',
      headerAlign: 'left',
      flex: 0.5,
      sortable: false,
      filterable: false,
    },
    {
      field: 'rol',
      headerName: 'Roles',
      align: 'left',
      headerAlign: 'left',
      flex: 1,
      sortable: false,
      filterable: false,
    },
    {
      field: 'dateCreated',
      headerName: 'Fecha de creación',
      type: 'dateTime',
      flex: 0.7,
      sortable: false,
      filterable: false,
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      align: 'center',
      headerAlign: 'left',
      flex: 0.5,
      sortable: false,
      filterable: false,
      renderCell: (params: GridCellParams) => (
        <ActionsCell id={params.row.id} onDelete={handleDelete} />
      ),
    },
  ];
  
  
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', mt: '40px' }}>
        <Typography
          sx={{
            flexGrow: 1,
            fontSize: '26px',
            color: '#4f2d80',
            opacity: 1,
            letterSpacing: '0.2px',
            fontWeight: 600,
            pl: '38px',
            pb: '22px',
          }}>
          Usuarios
        </Typography>
        <Paper
          component='form'
          variant='outlined'
          sx={{
            width: '366px',
            height: '42px',
          }}>
          <InputBase
            sx={{ ml: '21.97px', fontSize: '15px', fontWeight: '500' }}
            placeholder='Buscar...'
            value={filterValue}
            onChange={handleFilterChange}
          />
          <IconButton type='button' sx={{ p: '10px', color: '#4F2D80', opacity: 1 }} aria-label='buscar'>
            <SearchIcon />
          </IconButton>
        </Paper>
        <CreateDate />
        <Button
          variant='outlined'
          color='secondary'
          sx={{ width: '120px', ml: '11.11px', mr: '59px' }}
          startIcon={<AddIcon />}
          onClick={handleAddRow}>
          Adicionar
        </Button>
      </Box>
      <StyledDataGrid
        rows={filteredRows}
        columns={columns}
        autoHeight
        checkboxSelection
        disableColumnMenu
        disableColumnFilter
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 100]}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        disableRowSelectionOnClick
      />
    </div>
  );
}