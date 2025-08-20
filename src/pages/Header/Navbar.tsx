import React, { useState, useEffect } from "react";
import { Toolbar, Typography, Button, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const pages = ["About Me", "Experience", "Skills", "Contact Me"];

export function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(true);

  const handleNavigation = (page: string) => {
    const id = page.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigationFromAboutMePage = (page: string) => {
    const id = page.toLowerCase().replace(/\s+/g, "-");
    navigate(`/#${page}`);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
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
    <div
      style={{
        position: "fixed",
        top: isSticky ? 0 : "-200px", // adjust based on header height
        width: "99%",
        marginTop: '10px',
        backgroundColor: "black",
        borderRadius: "200px",
        height: "8rem",
        padding: "0 2rem",
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
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h6"
          component="a"
          onClick={() => navigate("/")}
          sx={{
            position: "absolute",
            left: "2rem",
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

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
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
      </Toolbar>
    </div>
  );
}
