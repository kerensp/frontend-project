import * as React from 'react';
import { GridCellParams, GridColDef, GridRowsProp, esES } from '@mui/x-data-grid';
import { randomCreatedDate } from '@mui/x-data-grid-generator';
import { Box, Typography } from '@mui/material';
import Row from '../../types/custom';
import { ActionsCell } from './renderCell/ActionsCell';
import { NameCell } from './renderCell/NameCell';
import { PhoneCell } from './renderCell/PhoneCell';
import { RolsCell } from './renderCell/RolsCell';
import { StateCell } from './renderCell/StateCell';
import { AddButton } from './toolbar/AddButton';
import SearchBar from './toolbar/SearchBar';
import CreateDateButton from './toolbar/CreateDateButton';
import { StyledDataGrid } from './StyledDataGrid';

export default function BasicEditingGrid() {
  const [rows, setRows] = React.useState<Row[] & GridRowsProp>([
    {
      id: 1,
      name: 'Rosemary Casanova',
      email: 'quiones@yahoo.com',
      phone: '+53 55555555',
      status: 'Activo',
      rols: ['Usuario', 'Super Admin'],
      dateCreated: new Date('2022-06-02T20:43:00'),
    },
    {
      id: 2,
      name: 'Ruby Lemus',
      email: 'antonia49@yahoo.com',
      phone: '+53 55555555',
      status: 'Activo',
      rols: ['Usuario'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 3,
      name: 'Bill Arenas',
      email: 'vliz90@yahoo.com',
      phone: '+53 55555555',
      status: 'Bloqueado',
      rols: ['Usuario'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 4,
      name: 'Clint Samaniego',
      email: 'vanabria@gmail.com',
      phone: '-',
      status: 'Activo',
      rols: ['Usuario', 'Dtor. Unidad'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 5,
      name: 'Jacob Leiva',
      email: 'escobedo@hotmail.com',
      phone: '-',
      status: 'Activo',
      rols: ['Usuario'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 6,
      name: 'Brent Orta',
      email: 'ortiz70@yahoo.com',
      phone: '+53 55555555',
      status: 'Bloqueado',
      rols: ['Usuario', 'Super Admin'],
      dateCreated: randomCreatedDate(),
    },
    {
      id: 7,
      name: 'Rosemary Casanova',
      email: 'quiones@yahoo.com',
      phone: '+53 55555555',
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
      phone: '',
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

  const handleDeleteClick = React.useCallback(
    (id: number) => {
      const updatedRows = rows.filter((row) => row.id !== id);
      setRows(updatedRows);
    },
    [rows]
  );

  const handleEditClick = (id: number) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          editable: true
        };
      }
      return row;
    });
    setRows(updatedRows);
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nombre de usuario',
      align: 'left',
      headerAlign: 'left',
      maxWidth: 250, 
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
      field: 'phone',
      headerName: 'Teléfono',
      align: 'left',
      headerAlign: 'left',
      flex: 0.6,
      sortable: false,
      filterable: false,
      renderCell: PhoneCell,
    },
    {
      field: 'state',
      headerName: 'Estado',
      align: 'left',
      headerAlign: 'left',
      flex: 0.5,
      sortable: false,
      filterable: false,
      renderCell: StateCell,
    },
    {
      field: 'rol',
      headerName: 'Roles',
      align: 'left',
      headerAlign: 'left',
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: RolsCell,
    },
    {
      field: 'dateCreated',
      headerName: 'Fecha de creación',
      align: 'left',
      headerAlign: 'left',
      type: 'dateTime',
      flex: 0.7,
      sortable: false,
      filterable: false,
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      align: 'left',
      headerAlign: 'left',
      flex: 0.5,
      sortable: false,
      filterable: false,
      renderCell: (params: GridCellParams) => (
        <ActionsCell id={params.row.id} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} />
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
        <SearchBar value={filterValue} onChange={handleFilterChange} />
        <CreateDateButton />
        <AddButton onAddRow={handleAddRow} />
      </Box>
      <StyledDataGrid
        rows={filteredRows}
        columns={columns}
        checkboxSelection
        disableColumnMenu
        disableColumnFilter
        autoHeight
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 100]}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        disableRowSelectionOnClick
        rowHeight={62}
        columnHeaderHeight={54}
        editMode='row'
      />
    </div>
  );
}
