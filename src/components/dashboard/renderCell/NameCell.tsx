import { Avatar, Typography } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid';

const getGender = (name: string) => {
  const firstName = name.split(' ')[0].toLowerCase();
  if (firstName === 'rosemary') {
    return 'women';
  } else {
    return 'men';
  }
};

export const NameCell = ({ row: { name } }: GridCellParams) => {
  const gender = getGender(name);

  const img = `https://randomuser.me/api/portraits/${gender}/${Math.floor(Math.random() * 100)}.jpg`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Avatar sx={{ width: '40px', height: '40px' }} src={img} />
      <Typography
        color='secondary'
        sx={{
          transitionDuration: '0.3s',
          fontSize: '14px',
          opacity: 1,
          '&:hover': {
            fontFamily: 'Roboto',
            textDecoration: 'underline',
            fontStyle: 'italic',
            fontSize: '16px',
            cursor: 'pointer',
            color: '#1A0A00',
          },
        }}>
        {name}
      </Typography>
    </div>
  );
};
