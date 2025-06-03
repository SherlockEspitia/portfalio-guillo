import { Row, Col, Card } from "react-bootstrap";

const recommendations = [
    {id:1, title:"", 
        text:`"Trabajar con Sherlock fue una experiencia excepcional. Su conocimiento en frameworks modernos como Vue.js y Astro.js 
        permitió que nuestro proyecto cobrara vida de manera eficiente y bien estructurada. Siempre estuvo atento a cada detalle, 
        asegurándose de que la funcionalidad fuera impecable y optimizada. Sin duda, confiaría en él para cualquier desarrollo futuro."`
    },
    {id:2, title:"", 
        text:`"Sherlock es un desarrollador brillante con una capacidad única para resolver problemas técnicos de manera efectiva. 
        Su enfoque práctico y su habilidad para implementar integraciones complejas con API 
        y autenticación lo convierten en un recurso invaluable en cualquier equipo. Siempre está explorando nuevas tecnologías 
        y aplicándolas con creatividad, lo que hace que cada proyecto en el que trabaja sea innovador."`
    },
    {id:3, title:"", 
        text:`"Lo que distingue a Sherlock es su compromiso con la excelencia y su pasión por aprender. 
        Su capacidad para integrar herramientas como Bootstrap con Vue.js mediante Vite demuestra su enfoque moderno y eficiente. 
        Más allá de su destreza técnica, tiene una mentalidad de crecimiento que lo llevará lejos en la industria del desarrollo. 
        Es alguien que no solo resuelve desafíos, sino que los convierte en oportunidades para mejorar."`
    }
]

function RecommendationsCard({title, text}){
    return <Card>
        <Card.Body>
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Text>
                {text}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default function Recommendations(){
    return(
        <>
        <Row className="w-100">
            <h3 className="text-primary fw-bold">
                Recomendaciones
            </h3>
        </Row>
        <Row className="w-100 container-fluid d-flex justify-content-between flex-wrap">
            {recommendations.map((r)=>{
                return <Col lg={4} key={r.id}>
                    <RecommendationsCard title={r.title} text={r.text}/>
                </Col>
            })}
        </Row>
        </>
    )
}