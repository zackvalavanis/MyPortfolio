import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Main.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ContactMe } from "../ContactMe/ContactMe";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigatetoaboutme = () => navigate('/about-me');
  const navigatetoExperience = () => navigate('/experience');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const renderAccordion = (title: string, subtitle: string, items: string[]) => (
    <Accordion
      defaultExpanded
      sx={{
        borderRadius: 2,
        mb: 2,
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        '&:before': { display: 'none' },
      }}
    >
      <AccordionSummary
        sx={{
          cursor: 'pointer',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 2,
          '&:hover': { backgroundColor: 'white', color: 'black' },
          px: 2,
          py: 1,
        }}
      >
        <Box display="flex" flexDirection="column">
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
    <div className='main-container'>
      {/* About Me Section */}
      <div className='section-1'>
        <section className='about-me-container'>
          <div className='image-section-1-container'>
            <img id='about-me' className='image-header' src="./IMG_2830.JPG" />
          </div>
          <div className='about-me-text-section-1-container'>
            <div className='goals-container'>
              <h1 className='header-about-me-text-container'>2025 Goals:</h1>
              <ul className='bullets-about-me-goals'>
                <li>Enroll in a Post-Baccalaureate Program in CS as the first step toward a Master’s in Computer Science</li>
                <li>Complete personal software projects</li>
                <li>Apply for internships or relevant experience in tech</li>
                <li>Expand knowledge in algorithms and data structures</li>
              </ul>
            </div>

            <div className='header-about-me-text-container'><h1>About Me:</h1></div>
            <div className='paragraph-about-me-text-container'>
              <p>
                Hello! My name is Zack Valavanis, and I’m passionate about continuing my journey into computer science and software engineering. I’m originally from the northside suburbs of Chicago, and in my free time, I enjoy playing guitar, going to concerts, traveling, and building side projects that challenge and inspire me.
              </p>
            </div>

            <div className='button-about-me-container'>
              <button onClick={navigatetoaboutme} className='button-more-info-about-me'>More Information</button>
            </div>
          </div>
        </section>
      </div>

      {/* Skills Section (UNCHANGED) */}
      <div id='skills' className='section-3-container'>
        <div className='header-container-3'><h1 className='header-section-3'>Technologies I Work With</h1></div>
        <section className='skills-container'>
          {[
            {
              title: 'Languages',
              techs: [
                { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'HTML5', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'Ruby', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' }
              ]
            },
            {
              title: 'Frontend',
              techs: [
                { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'React Native', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Bootstrap', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
                { name: 'Tailwind', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
                { name: 'Material UI', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' }
              ]
            },
            {
              title: 'Backend',
              techs: [{ name: 'Rails', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
              { name: 'Express', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
              { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' }
              ]
            },
            {
              title: 'Database',
              techs: [{ name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }]
            },
            {
              title: 'DevOps & Cloud',
              techs: [{ name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }]
            }
          ].map((category) => (
            <div key={category.title} className='container-headers-technologies'>
              <h2>{category.title}</h2>
              <div className='technology-grid'>
                {category.techs.map((tech) => (
                  <div key={tech.name} className='container-image-description'>
                    <img className='images-logos' src={tech.img} alt={tech.name} />
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Work Experience Section */}
      <div className='section-2-container'>
        <section className='section-2'>
          <div className='left-side-section-2-container'>
            <div id='experience' className='header-section-2'><h1>Work Experience</h1></div>

            <div className='accordion-container'>
              {renderAccordion("Salus Wellness", "Co-Founder & Full Stack Software Engineer", [
                "Built frontend using React and Material UI",
                "Integrated backend with Firebase and REST APIs",
                "Led a team of 3 developers"
              ])}
              {renderAccordion("Capture", "Software Engineering Intern", [
                "Built frontend using React and Material UI",
                "Integrated backend with Firebase and REST APIs",
                "Led a team of 3 developers"
              ])}
              {renderAccordion("Neuberger Berman", "Client Associate / Data Analyst", [
                "Built frontend using React and Material UI",
                "Integrated backend with Firebase and REST APIs",
                "Led a team of 3 developers"
              ])}
            </div>

            <div className='more-info-button-container'>
              <button onClick={navigatetoExperience} className='more-info-Button'>More Information</button>
            </div>
          </div>
          {!isMobile ? (
            <div className='right-side-section-2-container'>
              <img src='/coding_image.jpg' />
            </div>
          ) : (
            null
          )
          }
        </section>
      </div>

      {/* Education Section */}
      <div className='education-container'>
        <section className='education-section-container'>
          {!isMobile ? <div className='left-side-education-container'><img src='/Colorado.avif' /></div> : null}
          <div className='accordion-container-right-side'>
            <h1 className='header-right-section-2'>Education & Certifications</h1>
            {renderAccordion("The University of Colorado Boulder", "Bachelor of Science in Business Administration, Emphasis in Finance", [
              "Relevant coursework in finance and technology",
              "Participated in coding projects and group assignments",
              "Leadership roles in student organizations"
            ])}
            {renderAccordion("University of Westminster - London, UK", "Study Abroad", [
              "Explored global finance and business practices",
              "Collaborated on international projects",
              "Enhanced cultural competence and networking"
            ])}
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className='section-4-container'>
        <section id='contact-me' className='section-4'><ContactMe /></section>
      </div>
    </div>
  );
}
