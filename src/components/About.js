import { Row, Col } from "react-bootstrap";

function PersonImage(){
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
    </>
}

export default function About(){
    return(
        <Row className="w-100 pt-5" id="about">
            <Col className="ps-0" lg="2" ><PersonImage/></Col>
            <Col className="ps-4 ms-5">
                <h2 className="text-primary fw-bold">
                    Hola, soy Sherlock Espitia! 👋🏼
                </h2>
                <p>
                    Desarrollador Full Stack, con conocimientos en ciencia de datos y machine learning. 
                    Tengo una experiencia de mas de 5 años en la industria tecnologica.
                    Dentro del mundo del desarrollo me especializo en lenguajes como Python, JavaScript, Java y C#.
                    Me gusta mejorar mis habilidades con tecnologias existentes y conocer nuevas tecnologias que ayuden 
                    a facilitar los problemas del día a día.
                </p>
            </Col>
        </Row>
    )
}