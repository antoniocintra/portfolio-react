import './About.css'
import image_profile from '../../assets/profile_image.jpeg'



const About = () => {

    return (
        <div className='about'>
            <div className="about-title">
                <h1>Sobre</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={image_profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-description">
                        <p> Minha jornada começou com uma sólida base acadêmica, graduando-me em Análise e Desenvolvimento de Sistemas pela Estácio. Essa formação me proporcionou um entendimento abrangente dos fundamentos da computação e boas práticas no desenvolvimento de software.</p>
                        <p>  Além da minha formação acadêmica, busquei aprimorar minhas habilidades através de um curso intensivo de formação em Desenvolvedor Full Stack na Cubos Academy. Essa experiência ampliou meu conhecimento, permitindo-me abordar projetos de ponta a ponta, desde o desenvolvimento do back-end até a criação de interfaces de usuário dinâmicas e responsivas.</p>
                        <p>Possuo experiência em JavaScript,Typescript, Python, HTML, CSS, e frameworks como React e Node.js. Além de experiência em APIs, banco de dados, Git e GitHub.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;