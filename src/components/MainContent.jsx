import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer"

const MainContent = () => {
    return <div id="main-content">
        <AboutContainer/>
        <TechnologiesContainer/>
        <ProjectsContainer/>
    </div>
}

export default MainContent;