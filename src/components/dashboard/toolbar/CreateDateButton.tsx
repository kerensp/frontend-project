import { Button, Menu, MenuItem, Radio } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendarComponent } from './DateCalendarComponent';

const options = [
  'Hoy',
  'Últimos 7 días',
  'Últimos 30 días',
  'Últimos 90 días',
  'Este año',
  'Últimos 12 meses',
  'Rango',
];

export default function CreateDateButton() {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);

  const [selectedOption, setSelectedOption] = useState('Rango');

  const open = !!menuAnchorEl;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    handleClose();
  };

  return (
    <div>
      <Button
        variant='outlined'
        color='secondary'
        startIcon={<TuneIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        onClick={handleClick}
        sx={{
          width: '240px',
          ml: '14.02px',
          bgcolor: open ? '#4F2D80' : 'transparent',
          color: open ? '#FFFFFF' : '#4F2D80',
        }}>
        Fecha de creación
      </Button>
      <Menu
        anchorEl={menuAnchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          boxShadow: '0px 5px 30px #0000001F',
          borderRadius: '4px',
          minwidth: '345px'
        }}>
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={handleClose}
            sx={{ opacity: 1, fontSize: '18px', color: '#464646', paddingTop: '1px', paddingBottom: '1px'}}>
            <Radio
              sx={{
                color: '#11398633',
                '&.Mui-checked': {
                  color: '#113986',
                  '& .MuiRadio-colorSecondary': {
                    color: '#113986',
                  },
                },
              }}
              onChange={handleRadioChange}
              checked={selectedOption === option}
            />
            {option}
          </MenuItem>
        ))}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendarComponent />
        </LocalizationProvider>
      </Menu>
    </div>
  );
}
