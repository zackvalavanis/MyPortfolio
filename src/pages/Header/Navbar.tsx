import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from "react-router-dom";
import './NavBar.css'

const pages = ['About Me', 'Experience', 'Skills'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate()

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (page: string) => {
    const id = page.toLowerCase().replace(/\s+/g, '-'); // matches 'about-me'
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with ID "${id}" not found`);
    }
    handleCloseNavMenu();
  };

  return (
    <div style={{ backgroundColor: '#f9fafb', display: 'flex', justifyContent: 'center' }}>
      <AppBar position="static" sx={{ height: '8rem', backgroundColor: "black", width: '85%', display: 'flex', justifyContent: 'center', borderRadius: '200px' }}>
        <Container maxWidth={false}>
          <Toolbar
            disableGutters
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              HOME
            </Typography>


            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                flexGrow: 1,
                position: 'absolute',
                left: 0,
                right: 0,
                pointerEvents: 'none',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 4,
                  pointerEvents: 'auto',
                }}
              >
                {pages.map((page) => (
                  <Button
                    className="buttons-navigation-navbar"
                    key={page}
                    onClick={() => {
                      handleNavigation(page);
                      handleCloseNavMenu();
                    }}
                    sx={{
                      my: 2,
                      color: 'white',
                      display: 'block',
                      textTransform: 'none',
                      fontWeight: 800,
                      fontSize: 16
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

