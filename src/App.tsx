import React from "react";
import { Mail, Calendar, FileText } from "lucide-react";
import { portfolioConfig } from "./portfolioConfig";
import { ExperienceAccordion } from "./components/Accordion";
import { ProjectGrid } from "./components/ProjectCard";
import { BottomDock } from "./components/BottomDock";

const App: React.FC = () => {
  const config = portfolioConfig;

  // Real-time clock for Lucknow, India (Asia/Kolkata)
  const [lucknowTime, setLucknowTime] = React.useState(() => {
    return new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setLucknowTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // AI Prompt urls
  const encodedQuery = encodeURIComponent(config.searchQuery);
  const chatGptUrl = `https://chatgpt.com/?q=${encodedQuery}`;
  const claudeUrl = `https://claude.ai/new?q=${encodedQuery}`;
  const geminiUrl = `https://gemini.google.com/app?q=${encodedQuery}`;
  const perplexityUrl = `https://www.perplexity.ai/?q=${encodedQuery}`;

  return (
    <div className="bg-grid-fade">
      <main className="container fade-in" role="main">
        {/* Header Section */}
        <header className="header-wrapper">
          <div className="avatar-wrapper">
            <img
              src="/avatar.png"
              alt={`${config.name} Avatar`}
              className="avatar-img"
            />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">
              {config.name}
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                className="verified-icon"
                aria-label="Verified developer badge"
              >
                <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
              </svg>
            </h1>
            <p className="profile-role">{config.title}</p>
          </div>
        </header>

        {/* Bio Narrative Section */}
        <section className="bio-paragraph" aria-label="Professional Bio">
          <p>
            {config.bio} Currently based in <strong>{config.location}</strong>.
          </p>
          <p>
            Reach me at{" "}
            <a
              href={`mailto:${config.email}`}
              className="animated-link"
              title="Compose Email"
            >
              <Mail size={13} style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-2px" }} /> email
            </a>{" "}
            or{" "}
            {config.calendarLink && (
              <>
                <a
                  href={config.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-link"
                  title="Schedule a video call"
                >
                  <Calendar size={13} style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-2px" }} /> book a call
                </a>{" "}
                |{" "}
              </>
            )}
            see my code & contributions on{" "}
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
              title="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-2px" }}><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg> GitHub
            </a>
            .
          </p>
          <p>
            Find me on{" "}
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-2px" }}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> LinkedIn
            </a>
            {config.twitter && (
              <>
                ,{" "}
                <a
                  href={config.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-link"
                >
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-2px" }}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> Twitter / X
                </a>
              </>
            )}
            {config.medium && (
              <>
                , read my writing on{" "}
                <a
                  href={config.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-link"
                >
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-2px" }}>
                    <rect x="2" y="2" width="20" height="20" rx="4" />
                    <path d="M6 7.5h1.5v6.927L10.339 7.5H12l2.839 6.927V7.5H16.5v9h-1.65l-2.85-6.963-2.85 6.963H6.5v-9z" fill="var(--bg-color)" />
                  </svg> Medium
                </a>
              </>
            )}
            , or grab my{" "}
            <a href={config.resume} className="animated-link">
              <FileText size={13} style={{ display: "inline-block", verticalAlign: "middle", marginTop: "-2px" }} /> resume
            </a>
            .
          </p>
        </section>

        {/* Professional Experience Section */}
        <section className="section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-title"># experience</h2>
          <p className="section-subtitle">Places where I've shipped production code.</p>
          <ExperienceAccordion experiences={config.experiences} />
        </section>

        {/* Selected Work Section */}
        <section className="section" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-title"># selected work</h2>
          <p className="section-subtitle">Side projects, protocols, and open source libraries.</p>
          <ProjectGrid projects={config.projects} />
        </section>

        {/* Writings Section */}
        {config.writings && config.writings.length > 0 && (
          <section className="section" aria-labelledby="writing-heading">
            <h2 id="writing-heading" className="section-title"># writing</h2>
            <p className="section-subtitle">Notes on building, optimization, and system design.</p>
            <div className="writings-list">
              {config.writings.map((write, idx) => (
                <a
                  key={idx}
                  href={write.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="writing-item"
                >
                  <div className="writing-icon-box">
                    <FileText size={16} />
                  </div>
                  <div className="writing-details">
                    <span className="writing-title">{write.title}</span>
                    <span className="writing-date">{write.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* AI Query Ask Section */}
        <section className="section" aria-label="AI Search Integration">
          <div className="ai-ask-wrapper">
            <span className="ai-ask-text">
              # ask why Swastik matters? on any platform
            </span>
            <div className="ai-buttons-row">
              {/* ChatGPT Button */}
              <a
                href={chatGptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-search-btn"
                title="Ask ChatGPT about Swastik"
                aria-label="Ask ChatGPT"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.28 9.82a6 6 0 0 0-.51-4.91 6.05 6.05 0 0 0-6.51-2.9 6.07 6.07 0 0 0-10.28 2.17 6 6 0 0 0-4 2.9 6.05 6.05 0 0 0 .74 7.1 6 6 0 0 0 .51 4.91 6.05 6.05 0 0 0 6.52 2.9 6.07 6.07 0 0 0 10.27-2.17 6 6 0 0 0 4-2.9 6.05 6.05 0 0 0-.74-7.1zM13.26 22.43a4.5 4.5 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.79.79 0 0 0 .39-.68v-6.74l2.02 1.17a.07.07 0 0 1 .04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zm-9.66-4.13a4.47 4.47 0 0 1-.53-3.01l.14.08 4.78 2.76a.77.77 0 0 0 .78 0l5.84-3.37v2.33a.08.08 0 0 1-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.14-1.65zM2.34 7.9a4.49 4.49 0 0 1 2.37-1.97v5.67a.77.77 0 0 0 .39.68l5.81 3.35-2.02 1.17a.08.08 0 0 1-.07 0L4 12.02a4.5 4.5 0 0 1-1.66-4.12zm16.6 3.86-5.84-3.37 2.02-1.17a.08.08 0 0 1 .07 0l4.83 2.79a4.49 4.49 0 0 1-.68 8.1v-5.67a.79.79 0 0 0-.4-.68zm2.01-3.02-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.41 9.23V6.9a.07.07 0 0 1 .03-.06l4.83-2.79a4.5 4.5 0 0 1 6.68 4.66zM8.31 12.86l-2.02-1.16a.08.08 0 0 1-.04-.06V6.07a4.5 4.5 0 0 1 7.38-3.45l-.14.08-4.78 2.76a.79.79 0 0 0-.4.68zm1.1-2.37 2.6-1.5 2.61 1.5v3l-2.6 1.5-2.61-1.5z" />
                </svg>
              </a>

              {/* Claude Button */}
              <a
                href={claudeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-search-btn"
                title="Ask Claude about Swastik"
                aria-label="Ask Claude"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
                </svg>
              </a>

              {/* Gemini Button */}
              <a
                href={geminiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-search-btn"
                title="Ask Gemini about Swastik"
                aria-label="Ask Gemini"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81" />
                </svg>
              </a>

              {/* Perplexity Button */}
              <a
                href={perplexityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ai-search-btn"
                title="Ask Perplexity about Swastik"
                aria-label="Ask Perplexity"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.4 7.09h-2.31V.07l-7.51 6.35V.16h-1.16v6.2L4.49 0v7.09H1.6v10.4h2.89V24l6.93-6.36v6.2h1.16v-6.05l6.93 6.18v-6.49h2.89V7.09zm-3.47-4.53v4.53h-5.36l5.36-4.53zm-13.28.07 4.87 4.46H5.65V2.63zM2.76 16.33V8.25h7.85l-6.12 6.11v1.97H2.76zm2.89 5.04v-3.89h.01v-2.65l5.77-5.77v7.01l-5.77 5.3zm12.71.02-5.78-5.15V9.06l5.78 5.78v6.56zm2.89-5.07h-1.73v-1.97l-6.12-6.12h7.85v8.09z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="footer" role="contentinfo">
          <div className="footer-left">
            <p>
              Designed & Developed by{" "}
              <span className="highlight-text">{config.name}</span>
            </p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="footer-right">
            <p>
              Visitors <span className="highlight-text">1,842</span>
            </p>
            <p>{config.location} {lucknowTime}</p>
          </div>
        </footer>
      </main>

      {/* Floating Bottom Navigation Dock */}
      <BottomDock />
    </div>
  );
};

export default App;
