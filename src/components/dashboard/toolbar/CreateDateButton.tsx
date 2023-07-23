import { Button, FormControl, FormControlLabel, Menu, MenuItem, Radio, RadioGroup } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import React, { useState } from 'react';

const buttons = [
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

  const open = Boolean(menuAnchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    setMenuAnchorEl(null);
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
        }}>
        Fecha de creación
      </Button>
      <Menu
        anchorEl={menuAnchorEl}
        open={open}
        onClose={handleClose}
        sx={{ width: '345px', height: '721px', boxShadow: '0px 5px 30px #0000001F', mt: '8.44px', borderRadius: '4px' }}>
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            name='radio-buttons-group'
            value={selectedOption}
            onChange={handleRadioChange}>
            {buttons.map((buttons) => (
              <MenuItem key={buttons} onClick={handleClose} sx={{ opacity: 1, fontSize: '18px', color: '#464646' }}>
                <FormControlLabel sx={{gap: '14px'}} control={<Radio />} label={buttons} />
              </MenuItem>
            ))}
          </RadioGroup>
        </FormControl>
      </Menu>
    </div>
  );
}
