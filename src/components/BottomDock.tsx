import React, { useState, useEffect } from "react";
import { ArrowUp, Mail, Sun, Moon } from "lucide-react";
import { portfolioConfig } from "../portfolioConfig";

export const BottomDock: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="dock-wrapper">
      <nav className="dock" role="navigation" aria-label="Quick Actions">
        <button
          onClick={scrollToTop}
          className="dock-item"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>

        <a
          href={`mailto:${portfolioConfig.email}`}
          className="dock-item"
          title="Send Email"
          aria-label="Email Swastik"
        >
          <Mail />
        </a>

        <a
          href={portfolioConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
        </a>

        <a
          href={portfolioConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>

        <div className="dock-divider" />

        <button
          onClick={toggleTheme}
          className="dock-item"
          title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </nav>
    </div>
  );
};
