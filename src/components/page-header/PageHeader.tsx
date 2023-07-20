import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import { BreadcrumbsComponent } from './BreadcrumbsComponent';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ReactComponent as SettingIcon } from '../../assets/ajustes.svg';
import ProfileComponent from './ProfileComponent';

export const PageHeader = () => {
  return (
    <AppBar position='static' sx={{ boxShadow: '0px 2px 3px #142F471F', opacity: 1 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>{BreadcrumbsComponent}</Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton sx={{ cursor: 'default' }}>
            <Typography
              sx={{
                color: '#4F2D80',
                fontFamily: 'Segoe UI',
                fontSize: '20px',
              }}>
              EN
            </Typography>
          </IconButton>
          <IconButton sx={{ cursor: 'default' }}>
            <NotificationsIcon sx={{ width: 24, height: 24, color: '#4f2d80' }} />
          </IconButton>
          <IconButton sx={{ cursor: 'default' }}>
            <SettingIcon />
          </IconButton>
          <ProfileComponent />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
