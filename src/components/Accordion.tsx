import React, { useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import type { Experience } from "../portfolioConfig";

interface AccordionItemProps {
  experience: Experience;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        onClick={toggleAccordion}
        className="accordion-header-btn"
        aria-expanded={isOpen}
      >
        <div className="accordion-logo">
          {experience.logo ? (
            <img src={experience.logo} alt={experience.company} />
          ) : (
            <span>⚡</span>
          )}
        </div>
        <div className="accordion-title-container">
          <div className="accordion-company-row">
            <span className="accordion-company-name">{experience.company}</span>
            <ChevronRight className="chevron-icon" />
          </div>
          <span className="accordion-role">{experience.role}</span>
        </div>
        <div className="accordion-meta-row">
          <span>{experience.dateRange}</span>
          <span style={{ fontSize: "0.65rem", marginTop: "2px" }}>
            {experience.location}
          </span>
        </div>
      </button>

      <div
        ref={contentRef}
        className="accordion-content"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="accordion-description">{experience.description}</p>
        
        {experience.highlights && experience.highlights.length > 0 && (
          <ul className="accordion-highlights">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="accordion-highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        )}

        {experience.techStack && experience.techStack.length > 0 && (
          <div className="tech-tags">
            {experience.techStack.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface AccordionProps {
  experiences: Experience[];
}

export const ExperienceAccordion: React.FC<AccordionProps> = ({ experiences }) => {
  return (
    <div className="accordion-list">
      {experiences.map((exp, idx) => (
        <AccordionItem key={idx} experience={exp} />
      ))}
    </div>
  );
};
