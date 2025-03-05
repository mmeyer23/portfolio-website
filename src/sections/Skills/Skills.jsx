import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';

import htmlIcon from '../../assets/html.svg.png';
import cssIcon from '../../assets/css.png';
import jsIcon from '../../assets/javascript.webp';
import tsIcon from '../../assets/typescript.webp';
import pythonIcon from '../../assets/python.webp';
import cppIcon from '../../assets/c++.svg.png';
import reactIcon from '../../assets/React-icon.svg.png';
import expressIcon from '../../assets/expressjslogo.png';
import viteIcon from '../../assets/vite.svg.png';
import nodeIcon from '../../assets/node.png';
import sqlIcon from '../../assets/postgresql.png';
import mongoIcon from '../../assets/mongo.webp';
import reduxIcon from '../../assets/redux.png';
import webpackIcon from '../../assets/webpack.png';
import gitIcon from '../../assets/git.png';
import dockerIcon from '../../assets/docker.webp';
import awsIcon from '../../assets/awslogo.png';
import jestIcon from '../../assets/jest.png';
import muiIcon from '../../assets/materialui.png';
import nextIcon from '../../assets/nextjslogo.webp';
import tailwindIcon from '../../assets/tailwind.svg';

const skills = [
  { skill: 'HTML', src: htmlIcon },
  { skill: 'CSS', src: cssIcon },
  { skill: 'JavaScript', src: jsIcon },
  { skill: 'TypeScript', src: tsIcon },
  { skill: 'Python', src: pythonIcon },
  { skill: 'C++', src: cppIcon },
  { skill: 'React', src: reactIcon },
  { skill: 'Express', src: expressIcon },
  { skill: 'Vite', src: viteIcon },
  { skill: 'Node.js', src: nodeIcon },
  { skill: 'SQL', src: sqlIcon },
  { skill: 'MongoDB', src: mongoIcon },
  { skill: 'Redux', src: reduxIcon },
  { skill: 'Webpack', src: webpackIcon },
  { skill: 'Git', src: gitIcon },
  { skill: 'Docker', src: dockerIcon },
  { skill: 'AWS', src: awsIcon },
  { skill: 'Jest', src: jestIcon },
  { skill: 'Material UI', src: muiIcon },
  { skill: 'Next.js', src: nextIcon },
  { skill: 'TailwindCSS', src: tailwindIcon },
];

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        {skills.map((item, index) => (
          <SkillList key={index} src={item.src} skill={item.skill} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
