import { Row } from "react-bootstrap"

function ProjectItem({title, children}){
    return (
        <div className="">
            <h5 className="fw-bold">{title}</h5>
            <ul>
                {children}
            </ul>
            <hr className="w-75 mx-auto"></hr> 
        </div>
    )
}

export default function Projects(){
    return (
        <Row className="w-100 my-2" id="projects">
            <h3 className="text-primary fw-bold">
                Proyectos
            </h3>
            <ProjectItem title={"Website for Events of EDM"}>
                <li>Desarrollo de una pagina web con AstroJs para mostrar los eventos y los productos de una gestora de eventos de EDM</li>
            </ProjectItem>
        </Row>
    )
}