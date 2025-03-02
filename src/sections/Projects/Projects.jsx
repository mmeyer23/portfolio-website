import styles from './Projects.Styles.module.css';
import ProjectCard from '../../common/ProjectCard';
import dataWizard from '../../assets/dataWizardLogo.webp';
import adventureMatch from '../../assets/adventureBuddyLogo.webp';
import liftMetrics from '../../assets/liftMetrics.webp';
import underConstruction from '../../assets/underConstruction.webp';

//make an array of project data and then map over and create project cards

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dataWizard}
          link='https://github.com/mmeyer23/dataWizard'
          alt='DataWizard Logo'
          name='DataWizard'
          description='A.I. Database Population Tool'
        />
        <ProjectCard
          src={adventureMatch}
          link='https://github.com/mmeyer23/AdventureMatch'
          alt='Adventure Match Logo'
          name='Adventure Match'
          description='An App for Outdoor Enthusiasts'
        />
        <ProjectCard
          src={liftMetrics}
          link='https://www.github.com'
          alt='LiftMetrics Logo'
          name='LiftMetrics'
          description='Personalized Workout Tracker'
        />
        <ProjectCard
          src={underConstruction}
          link='https://www.github.com'
          alt='Under Contruction Logo'
          name='In Progress'
          description='Coming Soon!'
        />
      </div>
    </section>
  );
}
export default Projects;
