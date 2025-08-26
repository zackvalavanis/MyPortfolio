import React, { useState, useEffect } from "react";
import { Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

const pages = ["About Me", "Skills", "Experience", "Education", "Contact Me"];

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigation = (page: string) => {
    const id = page.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    handleMenuClose();
  };

  const handleNavigationFromAboutMePage = (page: string) => {
    const id = page.toLowerCase().replace(/\s+/g, "-");
    navigate(`/#${page}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
    handleMenuClose();
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 400;
      setIsSticky(window.scrollY < triggerPoint);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: isSticky ? 0 : "-200px",
        width: isMobile ? "100%" : "98%",
        left: isMobile ? 0 : "50%",      // <-- center horizontally
        transform: isMobile ? "none" : "translateX(-50%)",
        paddingTop: "env(safe-area-inset-top)",
        backgroundColor: "black",
        borderRadius: isMobile ? 0 : "200px",
        height: isMobile ? "6rem" : "8rem",
        px: isMobile ? 2 : 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.7)",
        transition: "top 0.3s ease",
        zIndex: 4300,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* HOME Button on the left */}
        <Typography
          variant="h6"
          component="a"
          onClick={() => navigate("/")}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          HOME
        </Typography>

        {/* Desktop Menu in the center */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 4, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() =>
                  location.pathname === "/" ? handleNavigation(page) : handleNavigationFromAboutMePage(page)
                }
                sx={{
                  color: "white",
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: 16,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Dropdown on the right */}
        {isMobile && (
          <>
            <IconButton onClick={handleMenuOpen} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 2, // slightly below icon
                    ml: 2,
                    zIndex: 5000,
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() =>
                    location.pathname === "/" ? handleNavigation(page) : handleNavigationFromAboutMePage(page)
                  }
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </Box>
  );
}
