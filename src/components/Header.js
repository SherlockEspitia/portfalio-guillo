import {EmailIcon} from '../icons/Email.js'
import { TelephoneIcon } from '../icons/Telephone.js'

function InfoIcon({children}){
    return <span className='pe-1'>
        {children}
    </span>
}
export default function Header(){
    return (
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
    )
}