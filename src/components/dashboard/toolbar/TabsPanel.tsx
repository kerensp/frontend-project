import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs
      sx={{
        '& button': {
          color: '#464646',
          fontSize: '17px',
          width: '113px',
          textTransform: 'none',
          marginLeft: '17px',
        },
        '& button:hover': { color: '#4F2D80' },
      }}
      value={value}
      onChange={handleChange}
      textColor='secondary'
      indicatorColor='secondary'>
      <Tab label='Todos' />
      <Tab label='Activos' />
      <Tab label='Sin verificar' />
      <Tab label='Bloqueados' />
    </Tabs>
  );
}
