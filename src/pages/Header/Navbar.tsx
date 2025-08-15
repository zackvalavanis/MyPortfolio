import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const pages = ["About Me", "Experience", "Skills", "Contact Me"];

export function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (page: string) => {
    const id = page.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1300,
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        padding: "1rem 0",
      }}
    >
      <div
        style={{
          width: "99%",
          backgroundColor: "black",
          borderRadius: "200px",
          display: "flex",
          alignItems: "center",
          height: "8rem",
          padding: "0 2rem",
          boxShadow: "0 2px 10px rgba(0,0,0,0.7)",
        }}
      >
        <AppBar
          position="static"
          color="transparent"
          elevation={0}
          sx={{ width: "100%", boxShadow: "none" }}
        >
          <Toolbar
            disableGutters
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

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 4,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavigation(page)}
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
        </AppBar>
      </div>
    </div>
  );
}
