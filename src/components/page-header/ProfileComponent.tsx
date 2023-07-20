import * as React from 'react';
import { styled } from '@mui/material/styles';
import { MenuProps, Menu, MenuItem, Divider, Box, Avatar, IconButton, Typography } from '@mui/material';
import { ReactComponent as ProfileIcon } from '../../assets/perfil.svg';
import { ReactComponent as ConfigIcon } from '../../assets/configuración.svg';
import { ReactComponent as CloseIcon } from '../../assets/cerrar-sesión.svg';
import avatar from '../../assets/avatar.jpg';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '4px',
    marginTop: theme.spacing(0.5),
    width: 270,
    boxShadow: '0px 5px 30px #0000001F',
    height: '273px',
  },
}));

const menuItemStyles = {
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '48px',
};

const StyledTypography = styled(Typography)({
  color: '#6E6B6B',
  fontSize: '18px',
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  opacity: '1',
});

export default function ProfileComponent() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton onClick={handleClick} disableRipple>
        <Avatar sx={{ w: '40px', h: '40px' }} alt='Carlos Díaz' src= {avatar} />
      </IconButton>
      <StyledMenu id='demo-customized-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose} sx={{ alignItems: 'center', margin: 2 }}>
          <Avatar sx={{ width: '50px', height: '50px', mr: '15px' }} alt='Carlos Díaz' src= {avatar} />
          <Typography
            sx={{
              color: '#000000',
              fontFamily: 'Roboto',
              fontSize: '18px',
              fontStyle: 'italic',
            }}>
            Carlos Díaz
            <Typography
              sx={{
                color: '#4646468A',
                fontSize: '15px',
                fontFamily: 'Roboto',
                ml: '-2px',
                mt: '-5px',
              }}>
              carlos@gmail.com
            </Typography>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={menuItemStyles}>
          <ProfileIcon style={{ marginRight: '12.39px' }} />
          <StyledTypography>Perfil</StyledTypography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={menuItemStyles}>
          <ConfigIcon style={{ marginRight: '10.96px' }} />
          <StyledTypography>Configuración</StyledTypography>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem sx={menuItemStyles} onClick={handleClose}>
          <CloseIcon style={{ marginRight: '12.4px' }} />
          <StyledTypography>Cerrar Sesión</StyledTypography>
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}
