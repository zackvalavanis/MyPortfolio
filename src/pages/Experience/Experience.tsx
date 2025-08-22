import React, { useEffect } from "react";
import './Experience.css';
import { NavBar } from "../Header/Navbar";
import { Footer } from "../Footer/Footer";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useMediaQuery, useTheme } from "@mui/material";

export function Experience() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className='page'>
      <NavBar />

      <div className='experience-container'>
        <div>
          <h1 style={{ marginBottom: 50, textAlign: 'center', fontSize: 50 }}>Work Experience</h1>
        </div>
        {/* Salus Wellness Accordion */}
        <Accordion className='accordion-container-experience' defaultExpanded={!isMobile}>
          <AccordionSummary className='summary-container' sx={{ cursor: 'default' }}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight="bold">Salus Wellness</Typography>
              <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">– Co-Founder & Full Stack Software Engineer</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Built frontend using React and Material UI" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Integrated backend with Firebase and REST APIs" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Led a team of 3 developers" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Capture Accordion */}
        <Accordion className='accordion-container-experience' defaultExpanded={!isMobile}>
          <AccordionSummary className='summary-container' sx={{ cursor: 'default' }}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight="bold">Capture</Typography>
              <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">– Software Engineering Intern</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Built frontend using React and Material UI" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Integrated backend with Firebase and REST APIs" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Led a team of 3 developers" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* Neuberger Berman Accordion */}
        <Accordion className='accordion-container-experience' defaultExpanded={!isMobile}>
          <AccordionSummary className='summary-container-experience' sx={{ cursor: 'default' }}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
              <Typography sx={{ fontSize: 18 }} fontWeight="bold">Neuberger Berman</Typography>
              <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">– Client Associate / Data Analyst</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Built frontend using React and Material UI" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Integrated backend with Firebase and REST APIs" />
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ minWidth: 20 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                </ListItemIcon>
                <ListItemText primary="Led a team of 3 developers" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <div className='download-resume-button-container'>
          <a
            href='./ZackValavanisResume.pdf'
            className='download-resume-button'
          >Download Resume</a>
        </div>

      </div>
      <Footer />
    </div>
  );
}
