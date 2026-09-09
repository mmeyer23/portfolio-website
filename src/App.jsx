import {
  HiArrowDownTray,
  HiArrowUpRight,
  HiMoon,
  HiSun,
} from 'react-icons/hi2';
import PropTypes from 'prop-types';
import avatar from './assets/cartoonheadshot.png';
import resume from './assets/cv.pdf';
import { useTheme } from './common/ThemeContext';
import {
  capabilities,
  experience,
  profile,
  projects,
  signals,
  solutionLifecycle,
} from './data/portfolio';
import './App.css';

function ExternalLink({ href, children, className = '' }) {
  return (
    <a
      className={className}
      href={href}
      target='_blank'
      rel='noreferrer'
    >
      {children}
    </a>
  );
}

function ProjectVisual({ type }) {
  return (
    <div className={`projectVisual projectVisual--${type}`} aria-hidden='true'>
      <div className='visualChrome'>
        <span />
        <span />
        <span />
      </div>
      <div className='visualCanvas'>
        <span className='visualLabel'>system / {type}</span>
        <div className='visualDiagram'>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className='projectCard' id={project.id}>
      <div className='projectCopy'>
        <p className='eyebrow accentText'>{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p className='projectSummary'>{project.summary}</p>
        <ul className='projectHighlights'>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <div className='projectMeta'>
          <div>
            <span className='metaLabel'>Contribution</span>
            <strong>{project.contribution}</strong>
          </div>
          <div>
            <span className='metaLabel'>Stack</span>
            <strong>{project.stack.join(' · ')}</strong>
          </div>
        </div>
        {project.link ? (
          <ExternalLink href={project.link} className='textLink'>
            {project.linkLabel} <HiArrowUpRight aria-hidden='true' />
          </ExternalLink>
        ) : (
          <span className='projectVisibility'>{project.visibility}</span>
        )}
      </div>
      <div className='projectVisualWrap'>
        <ProjectVisual type={project.visual} />
      </div>
    </article>
  );
}

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProjectVisual.propTypes = {
  type: PropTypes.string.isRequired,
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    eyebrow: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    contribution: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
    visibility: PropTypes.string,
    link: PropTypes.string,
    linkLabel: PropTypes.string,
    visual: PropTypes.string.isRequired,
  }).isRequired,
};

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className='siteHeader'>
        <nav className='shell navigation' aria-label='Primary navigation'>
          <a className='brand' href='#top' aria-label='Mason Meyer, home'>
            <span className='brandMark'>MM</span>
            <span>{profile.name}</span>
          </a>
          <div className='navLinks'>
            <a href='#work'>Projects</a>
            <a href='#experience'>Experience</a>
            <a href='#contact'>Contact</a>
            <a className='resumeLink' href={resume} target='_blank'>
              Resume <HiArrowUpRight aria-hidden='true' />
            </a>
            <button
              className='themeToggle'
              type='button'
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <HiMoon aria-hidden='true' />
              ) : (
                <HiSun aria-hidden='true' />
              )}
            </button>
          </div>
        </nav>
      </header>

      <main id='top'>
        <div className='shell'>
          <section className='hero' aria-labelledby='hero-title'>
            <div className='heroCopy'>
              <p className='eyebrow statusLine'>
                <span className='statusDot' aria-hidden='true' />
                {profile.role} · {profile.availability}
              </p>
              <h1 id='hero-title'>{profile.headline}</h1>
              <p className='heroLead'>{profile.introduction}</p>
              <div className='heroActions'>
                <a className='button buttonPrimary' href='#work'>
                  Explore solutions and outcomes <span aria-hidden='true'>↓</span>
                </a>
                <a className='button' href={`mailto:${profile.email}`}>
                  Start a conversation <HiArrowUpRight aria-hidden='true' />
                </a>
              </div>
            </div>
            <aside className='portraitWrap' aria-label='Portrait of Mason Meyer'>
              <div className='portraitFrame'>
                <img src={avatar} alt='Illustrated portrait of Mason Meyer' />
              </div>
              <div className='portraitTag'>
                <span className='metaLabel'>Based in</span>
                <strong>{profile.location}</strong>
              </div>
            </aside>
          </section>

          <div className='signalGrid' aria-label='Profile highlights'>
            {signals.map((signal) => (
              <div key={signal.label}>
                <span className='metaLabel'>{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>

          <section className='solutionLifecycle' aria-labelledby='lifecycle-title'>
            <div className='lifecycleIntro'>
              <p className='eyebrow'>How I work</p>
              <h2 id='lifecycle-title'>From discovery to adoption.</h2>
            </div>
            <ol className='lifecycleSteps'>
              {solutionLifecycle.map((step, index) => (
                <li key={step.label}>
                  <span className='lifecycleNumber'>0{index + 1}</span>
                  <strong>{step.label}</strong>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className='section' id='work' aria-labelledby='work-title'>
            <div className='sectionHeading'>
              <div>
                <p className='eyebrow'>01 / Technical projects</p>
                <h2 id='work-title'>Engineering systems shaped around real constraints.</h2>
              </div>
              <p>
                Technical projects demonstrating how I decompose complex
                problems, design reviewable workflows, and balance
                implementation with operational risk.
              </p>
            </div>
            <div className='projectList'>
              {projects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </section>

          <section
            className='section experienceSection'
            id='experience'
            aria-labelledby='experience-title'
          >
            <div className='experienceIntro'>
              <p className='eyebrow'>02 / Experience</p>
              <h2 id='experience-title'>Analysis, implementation, and adoption.</h2>
              <p>
                My work spans stakeholder discovery, business operations,
                solution delivery, and software engineering. I connect the
                implementation details to the people, processes, and outcomes
                each system supports.
              </p>
              <a className='textLink' href={resume} download>
                Download resume <HiArrowDownTray aria-hidden='true' />
              </a>
            </div>
            <div className='experienceList'>
              {experience.map((item) => (
                <article className='experienceItem' key={`${item.company}-${item.role}`}>
                  <p className='experienceDate'>{item.dates}</p>
                  <div>
                    <h3>
                      {item.link ? (
                        <ExternalLink href={item.link}>
                          {item.company} <HiArrowUpRight aria-hidden='true' />
                        </ExternalLink>
                      ) : (
                        item.company
                      )}
                    </h3>
                    <p className='experienceRole'>{item.role}</p>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className='section capabilitySection' aria-labelledby='capability-title'>
            <div>
              <p className='eyebrow'>03 / Capabilities</p>
              <h2 id='capability-title'>Capabilities across the solution lifecycle.</h2>
            </div>
            <div className='capabilityList'>
              {capabilities.map((capability) => (
                <div className='capabilityRow' key={capability.label}>
                  <h3>{capability.label}</h3>
                  <p>{capability.values}</p>
                </div>
              ))}
            </div>
          </section>

          <section className='contactSection' id='contact' aria-labelledby='contact-title'>
            <div>
              <p className='eyebrow'>04 / Contact</p>
              <h2 id='contact-title'>Have a system, workflow, or technical challenge worth improving?</h2>
            </div>
            <div className='contactLinks'>
              <a href={`mailto:${profile.email}`}>
                Email Mason <HiArrowUpRight aria-hidden='true' />
              </a>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </div>
          </section>
        </div>
      </main>

      <footer className='siteFooter shell'>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed and engineered with care.</span>
      </footer>
    </>
  );
}

export default App;
