/*import { EmailIcon } from '../icons/Email.js'
import { TelephoneIcon } from '../icons/Telephone.js'

function InfoIcon({children}){
    return <span className='pe-1'>
        {children}
    </span>
}*/
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
                <Nav className="w-100 justify-content-end">
                    <Nav.Link className="text-white" href="#about">Acerca de Mi</Nav.Link>
                    <Nav.Link className="text-white" href="#skills">Habilidades</Nav.Link>
                    <Nav.Link className="text-white" href="#projects">Proyectos</Nav.Link>
                    <Nav.Link className="text-white" href="#recommendations">Recomendaciones</Nav.Link>
                </Nav>
            </Navbar>
        </header>

    )
    /*return (
        <header className="w-100">
            <nav className="navbar container-fluid object-fit-contain bg-primary px-4">
                <div className="d-flex flex-column ml-2 pt-2">
                    <a className="nav-brand text-black link-underline link-underline-opacity-0 link-opacity-50-hover" href="/">Sherlock Espitia</a>
                    <p className="mb-0"> <InfoIcon><EmailIcon/></InfoIcon>email</p>
                    <p> <InfoIcon><TelephoneIcon/></InfoIcon>Telefono</p>
                </div>

                <div>
                    <ul className="nav justify-content-between">
                        <li className="nav-item">
                            <a className="nav-link text-black link-underline link-underline-opacity-0 link-opacity-50-hover" href="/">Acerca de Mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black link-underline link-underline-opacity-0 link-opacity-50-hover" href="/">Habilidades</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black link-underline link-underline-opacity-0 link-opacity-50-hover" href="/">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black link-underline link-underline-opacity-0 link-opacity-50-hover" href="/">Recomendaciones</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )*/
}