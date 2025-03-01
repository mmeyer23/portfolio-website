import styles from './Character.Styles.module.css';
import { HiDownload } from 'react-icons/hi';
import charImg from '../../assets/cartoonheadshot.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedLight from '../../assets/linkedin-light.svg';
import linkedDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';
import CV from '../../assets/cv.pdf';
import { useEffect } from 'react';

function consoleText(words, id) {
  var visible = true;
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  let currentWordIndex = 0;

  target.classList.add(styles.consoleText);

  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[currentWordIndex].substring(0, letterCount);
      window.setTimeout(function () {
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (
      letterCount === words[currentWordIndex].length + 1 &&
      waiting === false
    ) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[currentWordIndex].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(function () {
    var underscore = document.getElementById('console-underscore');
    if (visible === true) {
      underscore.className = `${styles.consoleUnderscore} ${styles.hidden}`;
      visible = false;
    } else {
      underscore.className = styles.consoleUnderscore;

      visible = true;
    }
  }, 400);

  // This interval handles word switching after each word finishes typing
  window.setInterval(function () {
    if (letterCount === 0) {
      // Move to the next word in the array when the current word is fully deleted
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  }, 900);
}

function Character() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedLight : linkedDark;

  const underscoreStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333', // Adjust this color if needed
  };

  useEffect(() => {
    consoleText(
      [
        'Full Stack Developer',
        'Web Developer',
        'React Enthusiast',
        'Node.js Specialist',
        'Tech Speaker & Presenter',
        'Open Source Contributor',
      ],
      'console'
    );
  }, []);

  return (
    <div>
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
          <h1>Mason Meyer</h1>
          <div className={styles.consoleWrapper}>
            <span id='console'></span>
            <span
              id='console-underscore'
              className={styles.consoleUnderscore}
              style={underscoreStyle}
            >
              &#95;
            </span>
          </div>
          <span className={styles.social}>
            <a href='https:///github.com' target='_blank'>
              <img src={githubIcon} alt='Github Icon' />
            </a>
            <a href='https:///linkedin.com' target='_blank'>
              <img src={linkedinIcon} alt='Linkedin Icon' />
            </a>
          </span>
          <p className={styles.description}>
            Passionate about innovation and designing scalable high-performance
            systems, with a proven ability to lead teams and deliver impactful
            solutions that drive business success.
          </p>
          <a href={CV} download>
            <button className='hover'>
              Download CV <HiDownload />
            </button>
          </a>
        </div>
      </section>
      <div className={styles.arrow}>&#8963;</div>
    </div>
  );
}

export default Character;
