import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='HTML' />
        <SkillList src={checkMarkIcon} skill='CSS' />
        <SkillList src={checkMarkIcon} skill='JavaScript' />
        <SkillList src={checkMarkIcon} skill='TypeScript' />
        <SkillList src={checkMarkIcon} skill='Python' />
        <SkillList src={checkMarkIcon} skill='C++' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='React' />
        <SkillList src={checkMarkIcon} skill='Express' />
        <SkillList src={checkMarkIcon} skill='Vite' />
        <SkillList src={checkMarkIcon} skill='Node' />
        <SkillList src={checkMarkIcon} skill='SQL (PostgresQL)' />
        <SkillList src={checkMarkIcon} skill='NoSQL (MongoDB)' />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill='Redux' />
        <SkillList src={checkMarkIcon} skill='Webpack' />
        <SkillList src={checkMarkIcon} skill='Git' />
        <SkillList src={checkMarkIcon} skill='Docker' />
        <SkillList src={checkMarkIcon} skill='AWS' />
        <SkillList src={checkMarkIcon} skill='Jest' />
        <SkillList src={checkMarkIcon} skill='Material UI' />
      </div>
    </section>
  );
}

export default Skills;
