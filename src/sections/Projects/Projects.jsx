import styles from './Projects.Styles.module.css';
import ProjectCard from '../../common/ProjectCard';
import dataWizard from '../../assets/dataWizardLogo.webp';
import adventureMatch from '../../assets/adventureBuddyLogo.webp';
import viberr from '../../assets/viberr.png';

//make an array of project data and then map over and create project cards

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={dataWizard}
          link='https://www.github.com'
          alt='DataWizard Logo'
          name='DataWizard'
          description='A.I. Powered Database Population Tool'
        />
        <ProjectCard
          src={adventureMatch}
          link='https://www.github.com'
          alt='Adventure Match Logo'
          name='Adventure Match'
          description='An Application for Outdoor Enthusiasts'
        />
        <ProjectCard
          src={viberr}
          link='https://www.github.com'
          alt='Viber Logo'
          name='Viber'
          description='A.I. Powered Database Population Tool'
        />
        <ProjectCard
          src={viberr}
          link='https://www.github.com'
          alt='Viber Logo'
          name='Viber'
          description='A.I. Powered Database Population Tool'
        />
      </div>
    </section>
  );
}
export default Projects;
