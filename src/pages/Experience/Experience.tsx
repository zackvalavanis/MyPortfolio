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

  // Helper to render a job accordion
  const renderJobAccordion = (company: string, role: string, bullets: string[], techs: string[]) => (
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

        {techs && techs.length > 0 && (
          <Box sx={{ mt: 2, ml: 2.5, mb: 2 }}>
            <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Tech Used:</Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {techs.map((tech, idx) => (
                <Box
                  key={idx}
                  sx={{
                    px: 2.5,
                    py: 0.5,
                    borderRadius: 1,
                    backgroundColor: '#f0f0f0',
                    fontSize: 13,
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <div className='page'>
      <NavBar />

      <div className='experience-container'>
        <div>
          <h1 style={{ marginBottom: 50, textAlign: isMobile ? 'center' : 'left', fontSize: 50 }}>Professional Experience</h1>
        </div>

        {renderJobAccordion(
          "Salus Wellness",
          "Co-Founder & Full Stack Software Engineer",
          [
            "Developing core mobile application features in React Native, designing and implementing intuitive frontend screens",
            "Building API integrations to connect React Native frontend with a Django backend, ensuring smooth data flow and scalability",
            "Serving as founding engineer, guiding technical direction and mentoring a small development team"
          ],
          ["React Native", "Django", "Python", "REST APIs", "PostgreSQL", "Docker"]
        )}

        {renderJobAccordion(
          "Capture",
          "Software Engineering Intern",
          [
            "Developing mobile app frontend screens using React Native and TypeScript",
            "Collaborating with backend engineers to ensure smooth API integration",
            "Contributing to UI/UX improvements and bug fixes to enhance user experience"
          ],
          ["React Native", "TypeScript"]
        )}

        {renderJobAccordion(
          "Neuberger Berman",
          "Client Associate / Data Analyst",
          [
            "Automated financial reporting with VBA macros, reducing processing time by 40% and saving 56+ hours annually",
            "Developed customized client presentations and dashboards for a $2.7B portfolio, highlighting KPIs such as sector allocation, volatility, and risk-adjusted returns",
            "Delivered accurate, data-driven insights that strengthened client relationships and earned recognition as 'most reliable' by a leading client"
          ],
          ["VBA", "Excel", "PowerPoint", "Data Analysis", "Reporting Automation"]
        )}

        <div className='download-resume-button-container'>
          <a href='./ZackValavanisResume.pdf' className='download-resume-button'>Download Resume</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
