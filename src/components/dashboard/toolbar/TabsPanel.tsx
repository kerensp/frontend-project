import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export const TabsPanel = () => {
  const [value, setValue] = React.useState('Todos');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Tabs
      sx={{
        '& button': {
          color: '#46464680',
          fontSize: '17px',
          textTransform: 'none',
          marginLeft: '17px',
          opacity: 1,
        },
        '& button:hover': { color: '#4F2D80' },
      }}
      value={value}
      onChange={handleChange}
      textColor='secondary'
      indicatorColor='secondary'>
      <Tab label='Todos' sx={{ml: '44px'}}/>
      <Tab label='Activos' />
      <Tab label='Sin verificar' />
      <Tab label='Bloqueados' />
    </Tabs>
  );
};
