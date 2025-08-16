import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './Main.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ContactMe } from "../ContactMe/ContactMe";



export function Main() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigatetoaboutme = () => {
    navigate('/about-me')
  }

  const navigatetoExperience = () => {
    navigate('/experience')
  }

  return (
    <div className='main-container'>
      <div className='section-1'>
        <section className='about-me-container'>
          <div className='image-section-1-container'>
            <img
              id='about-me'
              className='image-header'
              src="./IMG_2830.JPG">
            </img>
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

            <div className='header-about-me-text-container'>
              <h1>
                About Me:
              </h1>
            </div>
            <div className='paragraph-about-me-text-container'>
              <p>
                Hello! My name is Zack Valavanis, and I’m passionate about continuing my journey into computer science and software engineering. I’m originally from the northside suburbs of Chicago, and in my free time, I enjoy playing guitar, going to concerts, traveling, and building side projects that challenge and inspire me.
              </p>
            </div>

            <div className='button-about-me-container'>
              <button onClick={navigatetoaboutme} className='button-more-info-about-me'>
                More Information
              </button>
            </div>
          </div>
        </section>
      </div>

      <div id='skills' className='section-3-container'>
        <div className='header-container-3'>
          <h1 className='header-section-3'>Technologies I Work With</h1>
        </div>
        <section className='skills-container'>

          {/* TECH CATEGORIES */}
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
              techs: [
                { name: 'Rails', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' }
              ]
            },
            {
              title: 'Database',
              techs: [
                { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' }
              ]
            },
            {
              title: 'DevOps & Cloud',
              techs: [
                { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
              ]
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


      <div className='section-2-container'>
        <section className='section-2'>
          <div className='left-side-section-2-container'>
            <div id='experience' className='header-section-2'>
              <h1>
                Work Experience
              </h1>
            </div>

            {/* First Expereince - NB */}

            <div className='accordian-container'>
              <Accordion expanded={true}>
                <AccordionSummary sx={{ cursor: 'default' }}>
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

              <Accordion expanded={true}>
                <AccordionSummary sx={{ cursor: 'default' }}>
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

              <Accordion expanded={true}>
                <AccordionSummary sx={{ cursor: 'default' }}>
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

            </div>

            {/* Second Experience */}


            <div className='more-info-button-container'>
              <button
                onClick={navigatetoExperience}
                className='more-info-Button'
              >More Information
              </button>
            </div>
          </div>


          <div className='right-side-section-2-container'>
            <img src='public/coding_image.jpg' />
          </div>
        </section>
      </div >

      <div className='education-container'>
        <section className='education-section-container'>
          <div className='left-side-education-container'>
            <img src='/Colorado.avif'></img>
          </div>
          <div className='accordian-containe-right-side'>

            <div>
              <h1 className='header-right-section-2'>Education & Certifications</h1>
            </div>
            <Accordion expanded={true}>
              <AccordionSummary sx={{ cursor: 'default' }}>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                  <Typography sx={{ fontSize: 18 }} fontWeight="bold">The University of Colorado Boulder</Typography>
                  <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">– Bachelor of Science in Business Administration, Emphasis in Finance</Typography>
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

            <Accordion expanded={true}>
              <AccordionSummary sx={{ cursor: 'default' }}>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                  <Typography sx={{ fontSize: 18 }} fontWeight="bold">University of Wesminster - London, UK</Typography>
                  <Typography sx={{ fontSize: 16 }} variant="body2" color="text.secondary">– Study Abroad</Typography>
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
          </div>
        </section>
      </div>



      <div className='section-4-container'>
        <section id='contact-me' className='section-4'>
          <ContactMe />
        </section>
      </div>
    </div >
  )
}