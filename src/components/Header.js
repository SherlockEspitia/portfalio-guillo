import { Nav, Navbar } from "react-bootstrap"

export default function Header(){
    return(
        <header className="w-100 bg-primary">
            <Navbar expand="lg" className="px-4 text-white d-flex justify-content-between">
                <Nav className="d-flex flex-column justify-content-start flex-shrink-1 mx-0 object-fit-contain">
                    <Navbar.Brand className="text-white">
                        Sherlock Espitia
                    </Navbar.Brand>
                    <Navbar.Brand className="fs-6 py-0 text-white">
                        📞3124567890
                    </Navbar.Brand>
                    <Navbar.Brand className="fs-6 py-0 text-white">
                        📧example@mail.com
                    </Navbar.Brand>
                </Nav>
                <Navbar.Toggle aria-controls="smContent" className="text-white"/>
                <Navbar.Collapse id="smContent" >
                    <Nav className="w-100 justify-content-end" smContent>
                        <Nav.Link className="text-white" href="#about">Acerca de Mi</Nav.Link>
                        <Nav.Link className="text-white" href="#skills">Habilidades</Nav.Link>
                        <Nav.Link className="text-white" href="#projects">Proyectos</Nav.Link>
                        <Nav.Link className="text-white" href="#recommendations">Recomendaciones</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

    )
    
}