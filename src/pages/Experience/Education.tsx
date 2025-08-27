import React, { useEffect } from "react";
import './Education.css';
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


  const renderAccordion = (
    title: string,
    subtitle: string,
    items: string[],
    techs?: string[]
  ) => (
    <Accordion
      defaultExpanded={!isMobile}
      sx={{
        width: "100%",
        borderRadius: 2,
        mb: 2,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 2,
          '&:hover': { backgroundColor: 'white', color: 'black' },
          px: 2,
          py: 1,
          mt: 3
        }}
      >
        <Box display="flex" flexDirection="column" >
          <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 400 }}>{subtitle}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, py: 1 }}>
        <List sx={{ ml: 2 }}>
          {items.map((item, idx) => (
            <ListItem key={idx} sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 20 }}>
                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );



  return (
    <div className='page'>
      <NavBar />
      {/* Education Section */}
      <div className='education-container-education'>
        <section className='education-section-container-education'>
          <div className='accordion-container-education'>
            <h1 style={{ marginBottom: 20, textAlign: isMobile ? 'center' : 'left', fontSize: 50 }} className='header-education'>Education & Certifications</h1>
            {renderAccordion("The University of Colorado - Boulder", "Bachelor of Science in Business Administration, Emphasis in Finance", [
              "B.S. in Finance with coursework in financial analysis, markets, and technology applications",
              "Awarded the Chancellor’s Achievement Scholarship in recognition of strong academic performance and leadership potential",
              "Completed projects and case studies applying quantitative and analytical methods to real-world finance problems"
            ])}
            {renderAccordion("University of Westminster - London, UK", "Study Abroad", [
              "Explored global finance and business practices",
              "Collaborated with peers on cross-cultural projects analyzing global markets",
              "Developed global perspective and adaptability through immersion in international business environments"
            ])}
            {renderAccordion("Certifications", "", [
              "Certification in Blockchain and Digital Assets (CBDA) – DACFP",
              "Google Project Management Certificate – Google/Udemy",
              "Tableau 2022 A-Z: Hands-on Tableau Training for Data Science – Udemy",
              "SIE (Securities Industry Essentials Exam) – FINRA",
              "Series 3 (National Commodities Futures Exam) – FINRA/NFA",
              "Series 7 (General Securities Representative Exam) – FINRA",
              "Series 63 (Uniform Securities Agent State Law Exam) – NASAA/FINRA",
              "Series 65 (Uniform Investment Adviser Law Exam) – NASAA"
            ])}
          </div>
          <div className='download-resume-button-container'>
            <a href='./ZackValavanisResume.pdf' className='download-resume-button'>Download Resume</a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
