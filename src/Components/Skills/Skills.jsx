import icons from './Icons';
import './Skills.css';

export const SkillIcons = () => {
  return (
    <>
    <div className='skills-title'>
    <h2>Habilidades</h2>
    
  </div>
    <div className='container'>
      {icons.map((img) => (
        <div key={img.id} className='cards'>
          <img src={img.src} alt={img.alt} />
          <h3>{img.name}</h3>
        </div>
      ))}
    </div>
      </>
  );
};


