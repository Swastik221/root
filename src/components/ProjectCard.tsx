import React from "react";
import { ArrowUpRight, Play, Globe } from "lucide-react";
import type { Project } from "../portfolioConfig";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const showStatus = project.status && project.status.toLowerCase() !== "active";

  return (
    <div className="project-card">
      <div className="project-header">
        <span className="project-name">{project.name}</span>
        {showStatus && (
          <span className="project-status-tag">
            {" "}• ({project.status})
          </span>
        )}
      </div>
      <p className="project-description">{project.description}</p>
      
      <div className="project-links">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link project-link"
          >
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle" }}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg> github
          </a>
        )}
        {project.links.visit && (
          <a
            href={project.links.visit}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link project-link"
          >
            <ArrowUpRight size={12} /> visit
          </a>
        )}
        {project.links.preview && (
          <a
            href={project.links.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link project-link"
          >
            <Play size={12} /> preview
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link project-link"
          >
            <Globe size={12} /> live
          </a>
        )}
      </div>
    </div>
  );
};

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} />
      ))}
    </div>
  );
};
