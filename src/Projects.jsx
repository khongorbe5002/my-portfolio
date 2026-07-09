import { useState } from 'react';
import TopDirectory from './TopDirectory';

import woah_pic1 from './assets/woah-pic1.jpg';
import woah_pic2 from './assets/woah-pic2.jpg';
import woah_pic3 from './assets/woah-pic3.jpg';
import woah_pic4 from './assets/woah-pic4.jpg';

import woah_vid1 from './assets/woah-vid1.mp4';

import asrs_pic1 from './assets/asrs-pic1.jpg';
import asrs_pic2 from './assets/asrs-pic2.jpg';
import asrs_pic3 from './assets/asrs-pic3.jpg';
import asrs_pic4 from './assets/asrs-pic4.jpg';
import asrs_pic5 from './assets/asrs-pic5.jpg';

import robot_pic1 from './assets/robot-pic1.jpg';
import robot_pic2 from './assets/robot-pic2.jpg';
import robot_pic3 from './assets/robot-pic3.jpg';
import robot_pic4 from './assets/robot-pic4.jpg';

import robot_vid1 from './assets/robot-vid1.mp4';

import portfolio_pic1 from './assets/portfolio-pic1.jpg';
import portfolio_pic2 from './assets/portfolio-pic2.jpg';









// 1. Your new Array-based Database
const projectsList = [
  {
    title: 'Portfolio Website',
    status: 'in progress',
    tech: ['React', 'JavaScript', 'Vite', 'Figma'],
    images: [portfolio_pic1, portfolio_pic2],
    description: ['Engineered a responsive React/Vite SPA with a custom terminal-inspired UI.',
      'Built dynamic components including interactive accordions and scrolling media galleries.',
      'Implemented math-based orbital CSS animations and seamless client-side routing.']
  },
  {
    title: 'WOAH (wearable obstracl alert harness)',
    status: 'completed',
    tech: ['Python', 'Linux', 'OpenCV'],
    images: [woah_pic3, woah_pic4],
    videos: [woah_vid1],
    description: ['Created a device to assist visually impaired people detect dangerous obstacles', 
                  'Trained a custom YOLO computer vision model using Roboflow and Google Colab', 
                  'Developed a program in Python with a camera, ToF sensor and a CV model for detection and feedback in real time', 
                  'Implemented program into Raspberry Pi and went through testing and debugging for maximum optimization',],
    github: 'https://github.com/khongorbe5002/woah.git'
  },
  {
    title: 'Automated Storage and Retrieval System',
    status: 'completed',
    tech: ['Embedded C', 'ESP32', 'HTML/CSS'],
    images: [asrs_pic1, asrs_pic2, asrs_pic3, asrs_pic4, asrs_pic5],
    description: ['Worked closely with 5 students to build a system and took the lead of software integration',
                  'Coded a web-interface with embedded C in CSS and HTML',
                  'Troubleshooted and incorporated 4 motors into 3 axis of movements via a web server hosted on ESP-32',
                  'Incorporated controls for autonomous functions, such as placement of units and the storage and retrieval actions',],
    github: 'https://github.com/khongorbe5002/shelf-retriever-code.git',
  },
  {
    title: 'Autonomous Line Following Robot',
    status: 'completed',
    tech: ['Arduino', 'C', '3D printing'],
    images: [robot_pic1, robot_pic2, robot_pic3, robot_pic4],
    videos: [robot_vid1],
    description: ['Designed a bracket to insert the IR sensors in AutoDesk Fusion 360 and 3D Printed the structure',
                  'Designed the PCB structure that connected the power, sensor signal, motors, and Arduino UNO and soldered the pieces',
                  'Troubleshooted and reviewed the algorithm and code (in C) for following a black line using 5 IR sensors',
                  'Successfully completed 3 different levels of track autonomously.']
  }

];

export default function Projects() {
  // Tracks which project title is currently expanded
  const [expandedProject, setExpandedProject] = useState(null);

  // Toggles the accordion open and closed
  const handleToggle = (title) => {
    // If you click the one that's already open, close it (set to null). Otherwise, open the new one.
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <div className="subpage-subpage-container subpage-container--aligned">
      <TopDirectory />
      
      <div className="accordion-wrapper">
        <h2 className="projects-title">projects</h2>

        <div className="accordion-list">
          {projectsList.map((project) => (
            <div key={project.title} className="accordion-item">
              
              {/* The Clickable Header */}
              <button 
                className="accordion-header" 
                onClick={() => handleToggle(project.title)}
              >
                <span className="accordion-title">{project.title}</span>
                <span className="accordion-status">
                  {/* Changes an arrow icon based on if it is open or closed */}
                  [{project.status}] {expandedProject === project.title ? '-' : '+'}
                </span>
              </button>

              {/* The Expandable Content (Only renders if this project is active) */}
              {expandedProject === project.title && (
                <div className="accordion-content">
                  
                  <div className="tech-stack">
                    {project.tech.map((tool, index) => (
                      <span key={index} className="tech-tag">{tool}</span>
                    ))}
                  </div>

                  {/* --- NEW: The Project Image Gallery --- */}
                  {project.images && project.images.length > 0 && (
                    <div className="project-image-gallery">
                      {project.images.map((imgSrc, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={imgSrc} 
                          alt={`${project.title} preview ${imgIndex + 1}`} 
                          className="accordion-project-image" 
                        />
                      ))}

                      {/* 2. Map through looping videos */}
                        {project.videos && project.videos.map((vidSrc, vidIndex) => (
                          <video 
                            key={`vid-${vidIndex}`}
                            src={vidSrc} 
                            className="accordion-project-image" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                          />
                    ))}
                    </div>
                  )}

                  {/* The Bulleted Description */}
                  <ul className="project-description-list">
                    {project.description.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn">
                        github
                      </a>
                    )}
                  </div>
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}