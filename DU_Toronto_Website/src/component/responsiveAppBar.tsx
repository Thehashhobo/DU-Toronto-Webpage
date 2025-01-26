import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Link } from 'react-router-dom';

const pages = [
  // { name: 'Home', path: '/' },
  { name: 'Why DU', path: '/why-Du' },
  { name: 'GreekLife 101', path: '/greek-life' },
  { name: 'Alumni', path: '/alumni' },
];

const oldGold = '#CFB53B';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1.1rem',
        },
      }
    }
  },
  typography: {
    fontFamily: 'Merriweather, serif',
    h6: {
      fontSize: '1.5rem',
    },
  },
  palette: {
    primary: {
      main: oldGold,
    },
  },
});

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ width: '100%', backgroundColor: 'white', height: '64px' }}>
        <Container maxWidth={false} sx={{ padding: 0, height: '100%' }}>
          <Toolbar disableGutters sx={{height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'stretch' }}>

            {/* Logo and Logo Text */}
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: '100%' }}>
              {/* <AdbIcon sx={{ mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.05rem',
                  color: oldGold,
                  textDecoration: 'none',
                }}
                component={Link} to="/"
              >
                DU
              </Typography>
            </Box>

            {/* Navigation Buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100%' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                to={page.path}
                  sx={{
                  my: 0,
                  color: 'black',
                  display: 'flex', // Make the button a flex container
                  justifyContent: 'center', // Center content horizontally
                  alignItems: 'center', // Center content vertically
                  height: '100%',
                  borderRadius: 0,
                    '&:hover': {
                      backgroundColor: '#C4C4C4',
                      color: 'black',
                    },
                }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default ResponsiveAppBar;