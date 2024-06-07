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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos et magnam sunt a accusamus</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim adipisci hic possimus fugit culpa iste harum, officiis
                            alias assumenda illum!</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About;