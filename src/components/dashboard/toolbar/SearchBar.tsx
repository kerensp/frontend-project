import styled from '@emotion/styled';
import { InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchField = styled(OutlinedInput)({
  width: '366px',
  height: '42px',
  border: '1px solid #09378C33',
  borderRadius: '5px',
  opacity: 1,
  '& input::placeholder': {
    color: '#46464680',
    fontSize: '15px',
    mt: '10.8px',
    ml: '21.97px',
    mb: '9.8px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: 0,
  },
});

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <SearchField
      placeholder='Buscar...'
      endAdornment={
        <InputAdornment position='end'>
          <SearchIcon style={{ color: '#4F2D80' }} />
        </InputAdornment>
      }
      value={value}
      onChange={onChange}
    />
  );
}
