function ProjectCard({ src, link, alt, name, description }) {
  return (
    <a href={link} target='_blank'>
      <img className='hover' src={src} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  );
}

export default ProjectCard;
