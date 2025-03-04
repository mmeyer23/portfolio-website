import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ src, skill }) {
  return (
    <div className={styles.skillBox}>
      <img src={src} alt={skill} className={styles.skillIcon} />
      <p className={styles.skillName}>{skill}</p>
    </div>
  );
}

export default SkillList;
