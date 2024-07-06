import './Projects.css';
import work_data from '../../assets/work-data';



const Projects = () => {
    return (
        <div className='my-work' id='projects'>
            <div className="my-work-title">
                <h1>Projetos</h1>
                
            </div>
            <div className="work-container">
                {work_data.map((work, index) => {
                    return (
                        <div key={index}>

                            <h3>{work.name}</h3>
                            <a href= {work.url}
                                target='_blank'
                            >
                                <img src={work.img} alt= {work.name}/>
                            </a>
                            <h3 className='h3-subs'>Tecnologias: HTML,CSS,JavaScript, React. </h3>

                        </div>
                    );

                })}
            </div>
           
        </div>
    )
}

export default Projects