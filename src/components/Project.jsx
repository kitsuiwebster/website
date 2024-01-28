import '../assets/scss/components/Project.scss';
import '../assets/scss/index.scss'
import ProjectIcon from './ProjectIcon';


function Project({ schoolLogo, title, subtitle, description, imageSrc, imageAlt, logoSrc0, logoSrc1, logoSrc2, logoSrc3, logoSrc4, logoSrc5 }) {

    
    return(
        <div id="project">
            <div className="project">
                <div className='project-header'>
                    <div className='project-header-container1'>
                        <img className='project-header-logo' src={schoolLogo} alt="Openclassrooms"></img>
                        <h1 className='project-header-title'>{title}</h1>
                    </div>
                    <div className='project-header-container2'>
                        <h2 className='project-header-subtitle'>{subtitle}</h2>
                    </div>
                </div>
                <p className='project-description'>{description}</p>
                <div className='project-image'>
                    <img className='project-image-img' src={imageSrc} alt={imageAlt}></img>
                </div>
                <div className='project-icons'>
                    <ProjectIcon src={logoSrc0}/>
                    <ProjectIcon src={logoSrc1}/>
                    <ProjectIcon src={logoSrc2}/>
                    <ProjectIcon src={logoSrc3}/>
                    <ProjectIcon src={logoSrc4}/>
                    <ProjectIcon src={logoSrc5}/>
                </div>
            </div>
        </div>
    )
}

export default Project