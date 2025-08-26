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

export function Education() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // Helper to render a job accordion
  const renderJobAccordion = (company: string, role: string, bullets: string[]) => (
    <Accordion className='accordion-container-experience' expanded>
      <AccordionSummary className='summary-container' sx={{ cursor: 'default' }}>
        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
          <Typography sx={{ fontSize: 18 }} fontWeight="bold">{company}</Typography>
          <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">– {role}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {bullets.map((bullet, idx) => (
            <ListItem key={idx}>
              <ListItemIcon sx={{ minWidth: 20 }}>
                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText primary={bullet} />
            </ListItem>
          ))}
        </List>

      </AccordionDetails>
    </Accordion>
  );

  return (
    <div className='page'>
      <NavBar />

      <div className='experience-container'>
        <div>
          <h1 style={{ marginBottom: 50, textAlign: isMobile ? 'center' : 'left', fontSize: 50 }}>Education & Certifications</h1>
        </div>

        {renderJobAccordion(
          "University of Colorado - Boulder",
          "Bachelor of Science in Business Administration, Emphasis in Finance",
          [
            "B.S. in Finance with coursework in financial analysis, markets, and technology applications",
            "warded the Chancellor’s Achievement Scholarship in recognition of strong academic performance and leadership potential",
            "Completed projects and case studies applying quantitative and analytical methods to real-world finance problems"
          ]
        )}

        {renderJobAccordion(
          "University of Westminster, London, UK",
          "Study Abroad",
          [
            "Explored global finance and business practices",
            "Collaborated with peers on cross-cultural projects analyzing global markets",
            "Developed global perspective and adaptability through immersion in international business environments"
          ],
        )}
      </div>

      <Footer />
    </div>
  );
}
