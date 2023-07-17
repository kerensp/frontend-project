import * as React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {
  Drawer,
  List,
  styled,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { ReactComponent as UserIcon } from '../../assets/icon/usuarios.svg';
import logo from '../../assets/logo.svg';


const drawerWidth = 280;

interface DrawerButton {
  text: string;
  icon: JSX.Element;
}

const StyledButton = styled(Button)({
  color: 'primary',
  width: '100%',
  justifyContent: 'flex-start',
  fontSize: '18px',
  paddingLeft: '23px',
  marginBottom: '8px',
  '&:hover': {
    background: '#4F2D80',
    color: '#FFFFFF',
  },
});

const securityButtons: DrawerButton[] = [
  {
    text: 'Usuarios',
    icon: <UserIcon />,
  },
  {
    text: 'Roles',
    icon: <InboxIcon />,
  },
  {
    text: 'Configuración',
    icon: <InboxIcon />,
  },
];

export const PermanentDrawer = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'>

      <Box><img src={logo} /></Box>
      
      
      <Typography color='#CBC7CF' ml='23px' mb='22px' fontSize='18px'>
        SEGURIDAD
      </Typography>
      <List sx={{ alignContent: 'center', marginX: '23px', }}>
        {securityButtons.map((button, index) => (
          <StyledButton key={index} startIcon={button.icon}>
            {button.text}
          </StyledButton>
        ))}
      </List>
    </Drawer>
  );
};
