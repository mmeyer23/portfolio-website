import styles from './Projects.Styles.module.css';
import viberr from '../../assets/viberr.png';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <a href='https://github.com/mmeyer23/portfolio-website' target='_blank'>
          <img className='hover' src={viberr} alt='Project1' />
          <h3>DataWizard</h3>
          <p>A.I. Powered Database Population Tool</p>
        </a>
      </div>
    </section>
  );
}
export default Projects;
