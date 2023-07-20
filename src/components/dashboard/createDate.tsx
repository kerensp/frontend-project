import { Button, FormControl, FormControlLabel, Menu, MenuItem, Radio, RadioGroup } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import React from 'react';

const buttons = ['Hoy', 'Últimos 7 días', 'Últimos 30 días', 'Últimos 90 días', 'Este año', 'Últimos 12 meses'];

export default function CreateDate () {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
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
          ml: '14.02px'
        }}>
        Fecha de creación
      </Button>
      <Menu
        elevation={10}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ width: '345px', height: '721px' }}>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            name='radio-buttons-group'
            value={value}
            onChange={handleChange}>
            {buttons.map((buttons) => (
              <MenuItem key={buttons} onClick={handleClose} sx={{ opacity: 1, fontSize: '18px' }}>
                <FormControlLabel control={<Radio />} label={buttons} />
              </MenuItem>
            ))}
            <MenuItem>
              <FormControlLabel control={<Radio />} label={'Rango'} />
            </MenuItem>
          </RadioGroup>
        </FormControl>
      </Menu>
    </div>
  );
}
