import { useEffect, useRef } from 'react';
import styles from './Projects.Styles.module.css';
import ProjectCard from '../../common/ProjectCard';
import dataWizard from '../../assets/dataWizardLogo.webp';
import adventureMatch from '../../assets/adventureBuddyLogo.webp';
import liftMetrics from '../../assets/liftMetrics.webp';
import underConstruction from '../../assets/underConstruction.webp';

function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        } else {
          entry.target.classList.remove(styles.visible);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className={styles.projectCard}
        >
          <ProjectCard
            src={liftMetrics}
            link='https://github.com/mmeyer23/LiftMetrics'
            alt='LiftMetrics Logo'
            name='LiftMetrics'
            description='Personalized Workout Tracker'
          />
        </div>
        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className={styles.projectCard}
        >
          <ProjectCard
            src={dataWizard}
            link='https://github.com/mmeyer23/dataWizard'
            alt='DataWizard Logo'
            name='DataWizard'
            description='A.I. Database Population Tool'
          />
        </div>
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className={styles.projectCard}
        >
          <ProjectCard
            src={adventureMatch}
            link='https://github.com/mmeyer23/AdventureMatch'
            alt='Adventure Match Logo'
            name='Adventure Match'
            description='An App for Outdoor Enthusiasts'
          />
        </div>
        <div
          ref={(el) => (cardRefs.current[3] = el)}
          className={styles.projectCard}
        >
          <ProjectCard
            src={underConstruction}
            link='https://www.github.com'
            alt='Under Contruction Logo'
            name='In Progress'
            description='Coming Soon!'
          />
        </div>
      </div>
    </section>
  );
}
export default Projects;
