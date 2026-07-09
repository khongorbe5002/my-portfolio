import { useState } from 'react';
import TopDirectory from './TopDirectory';

export default function Experiences() {
  // Tracks which pop-up is open. If null, the pop-up is hidden.
  const [activeExperience, setActiveExperience] = useState(null);

  const experiencesData = [
    { 
      id: 1, 
      name: "ubc concrete canoe", 
      date: "09/2025 - present", 
      delay: "-0s", 
      desc: "Software Team: Architected simulation software for different concrete canoe designs in C++ using OCCT, and implemented wire-frame logic and mesh rendering." 
    },
    { 
      id: 2, 
      name: "ubc rapid", 
      date: "09/2024 - 01/2025", 
      delay: "-2s", 
      desc: "Filament Recycler Electrical Member: Drafted a wiring diagram connecting the extruder, housing, and temperature control, and assisted with 3D printer maintenance." 
    },
    { 
      id: 3, 
      name: "lee's donuts", 
      date: "04/2026 - present", 
      delay: "-4s", 
      desc: "Decorator & Cashier: Managed high-volume transactions during peak hours and optimized workflow to decorate up to 2000 donuts with high attention to detail." 
    },
    { 
      id: 4, 
      name: "apricity cashmere", 
      date: "04/2024 - present", 
      delay: "-6s", 
      desc: "Sales Associate: Provided consultative service to 40+ daily customers and launched an e-commerce/social media strategy that boosted sales by 20%." 
    },
    { 
      id: 5, 
      name: "steveston bakery", 
      date: "03/2023 - 08/2023", 
      delay: "-8s", 
      desc: "Cashier & Server: Processed transactions for 100+ daily customers in a fast-paced environment and coordinated with kitchen staff to streamline operations." 
    },
    { 
      id: 6, 
      name: "ubc photosoc", 
      date: "09/2024 - 04/2025", 
      delay: "-10s", 
      desc: "Magazine Designer: Designed layouts and visual media for the society's publications and events." 
    },
    { 
      id: 7, 
      name: "agora cafe", 
      date: "09/2025 - present", 
      delay: "-12s", 
      desc: "Community Dinner Volunteer: Supported cafe operations and helped coordinate community dinner services." 
    },
  ];

  return (
    <div className="subpage-subpage-container subpage-container--aligned">
      <TopDirectory />
      
      {/* The Orbiting Canvas */}
      <div className="experiences-canvas">
        {experiencesData.map((exp) => (
          <button
            key={exp.id}
            className="floating-box"
            style={{ animationDelay: exp.delay }}
            onClick={() => setActiveExperience(exp)}
          >
            {exp.name}
          </button>
        ))}
      </div>

      {/* THE MODAL (Pop-up Window) */}
      {activeExperience && (
        <div className="modal-overlay" onClick={() => setActiveExperience(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{activeExperience.name}</h2>
            <p className="experience-date">{activeExperience.date}</p>
            <p>{activeExperience.desc}</p>
            <button className="close-btn" onClick={() => setActiveExperience(null)}>
              [ close ]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}