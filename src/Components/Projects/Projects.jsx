import './Projects.css';
import work_data from '../../assets/work-data';
import arrow_icon from '../../assets/arrow_icon.svg'


const Projects = () => {
    return (
        <div className='my-work'>
            <div className="my-work-title">
                <h1>Projetos</h1>
                <hr />
            </div>
            <div className="work-container">
                {work_data.map((work, index) => {
                    return (
                        <div key={index}>

                            <h3>{work.name}</h3>
                            <a href='https://cubos-player-k4w4aztmk-antnio-eduardo-cintra-ferrazs-projects.vercel.app/'
                                target='_blank'
                            >
                                <img src={work.img} alt="" />
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