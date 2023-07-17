import { Drawer, List, styled, Button, Typography, Box } from '@mui/material';
import { ReactComponent as UserIcon } from '../../assets/usuarios.svg';
import { ReactComponent as RolIcon } from '../../assets/roles.svg';
import { ReactComponent as TraceIcon } from '../../assets/trazas.svg';
import { ReactComponent as AuditIcon } from '../../assets/auditoría.svg';
import { ReactComponent as ExpedientIcom } from '../../assets/expedientes.svg';
import { ReactComponent as WorkerIcon } from '../../assets/trabajadores.svg';
import { ReactComponent as ProcessIcon } from '../../assets/procesos.svg';
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
  gap: '.7rem',
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
    icon: <RolIcon />,
  },
  {
    text: 'Trazas',
    icon: <TraceIcon />,
  },
  {
    text: 'Auditoría',
    icon: <AuditIcon />,
  },
];

const rrhhButtons: DrawerButton[] = [
  {
    text: 'Expedientes',
    icon: <ExpedientIcom />,
  },
  {
    text: 'Trabajadores',
    icon: <WorkerIcon />,
  },
  {
    text: 'Procesos',
    icon: <ProcessIcon />,
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
      <Box sx={{ w: '230px', h: '63px', margin: '40px 26.65px 40.49px 23px' }}>
        <img src={logo} />
      </Box>

      <Typography color='#CBC7CF' ml='23px' mb='19px' fontSize='18px'>
        SEGURIDAD
      </Typography>
      <List sx={{ alignContent: 'center', marginX: '23px' }}>
        {securityButtons.map((button, index) => (
          <StyledButton key={index} startIcon={button.icon}>
            {button.text}
          </StyledButton>
        ))}
      </List>

      <Typography color='#CBC7CF' ml='23px' mb='8px' mt='19px' fontSize='18px'>
        RRHH
      </Typography>
      <List sx={{ alignContent: 'center', marginX: '23px' }}>
        {rrhhButtons.map((button, index) => (
          <StyledButton key={index} startIcon={button.icon}>
            {button.text}
          </StyledButton>
        ))}
      </List>
    </Drawer>
  );
};
