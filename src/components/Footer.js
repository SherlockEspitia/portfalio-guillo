import { Button, Nav } from "react-bootstrap";

export default function Footer(){
    return <footer>
        <Nav className="d-inline-flex flex-row-reverse fixed-bottom">
            <Button className="fw-bold rounded-circle">
                <Nav.Link href="#root" className="text-white">
                    &uarr;
                </Nav.Link>
            </Button>
        </Nav>
    </footer>
}