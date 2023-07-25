import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { DateCalendar } from '@mui/x-date-pickers';

interface DateCalendarProps {
  initialDate?: Date;
}

export const DateCalendarComponent: React.FC<DateCalendarProps> = ({ initialDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleClearClick = () => {
    setSelectedDate(null);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <DateCalendar
        value={selectedDate}
        onChange={handleDateChange}
        sx={{
          color: '#000000DE',
          fontSize: '16px',
          fontFamily: 'Roboto',
          '.MuiPickersDay-today':{
            bgcolor: '#113986',
            color: '#FFFFFF',
            fontFamily: 'Roboto',
            fontStyle: 'italic',
            border: 'none'
          },
        }}
      />
      <Button
        variant='contained'
        onClick={handleClearClick}
        sx={{
          width: '151px',
          height: '48px',
          bgcolor: '#113986',
          fontFamily: 'Roboto',
          color: '#FFFFFF',
          borderRadius: '7px',
          opacity: 1,
          fontSize: '18px',
          fontStyle: 'italic',
          mb: '42px',
          mt: '8px',
          '&: hover': {
            bgcolor: '#113986',
          },
        }}>
        Limpiar
      </Button>
    </div>
  );
};
