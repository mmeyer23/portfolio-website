import styles from './Character.Styles.module.css';
import charImg from '../../assets/cartoonheadshot.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedLight from '../../assets/linkedin-light.svg';
import linkedDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import CV from '../../assets/cv.pdf';

function Character() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedLight : linkedDark;

  return (
    <section id='character' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.character}
          src={charImg}
          alt='Animated Headshot of Mason Meyer'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color Mode Icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mason <br />
          Meyer
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href='https:///github.com' target='_blank'>
            <img src={githubIcon} alt='Github Icon' />
          </a>
          <a href='https:///linkedin.com' target='_blank'>
            <img src={linkedinIcon} alt='Linkedin Icon' />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about innovation and designing scalable high-performance systems, with a proven ability to lead teams and deliver impactful solutions that drive business success.
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Character;
