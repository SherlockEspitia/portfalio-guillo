import { Row, Card, Figure } from "react-bootstrap";
import js_logo from "../icons/js_logo.svg";
import python_logo from "../icons/python_logo.svg";
import php_logo from "../icons/php_logo.svg";
import cSharp_logo from "../icons/cSharp_logo.svg";
import nodejs_logo from "../icons/nodejs_logo.svg";
import vue_logo from "../icons/vue_logo.svg";
import react_logo from "../icons/react_logo.svg";

const skills = [
    { id: 1, imgLogo: js_logo, skillName: "JavaScript", yearsExperience: 5},
    { id: 2, imgLogo: python_logo, skillName: "Python", yearsExperience: 7},
    { id: 3, imgLogo: php_logo, skillName: "PHP", yearsExperience: 2},
    { id: 4, imgLogo: cSharp_logo, skillName: "C#", yearsExperience: 1},
    { id: 5, imgLogo: nodejs_logo, skillName: "NodeJS", yearsExperience: 3},
    { id: 6, imgLogo: vue_logo, skillName: "VueJS", yearsExperience: 2},
    { id: 7, imgLogo: react_logo, skillName: "React", yearsExperience: 2},
]

function SkillCard({imgLogo, skillName, yearsExperience }){
    return(
        <Card style={{width: '12rem'}} className="shadow m-2 mb-5 pb-2">
            <Figure className="mx-auto p-0 mt-1">
                <Figure.Image width={100} src={imgLogo} className="me-0"/>
                <Figure.Caption className="text-center">
                    {skillName}
                </Figure.Caption>
            </Figure>
            <Card.Body className="pt-0">
                <Card.Text className="text-center">
                    +{yearsExperience} {yearsExperience>1 ? "Años": "Año"}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default function Skills(){
    return(
        <>
        <Row className="w-100 mt-4">
            <h3 className="text-primary fw-bold">Habilidades</h3>
        </Row>
        <Row className="w-100 container-fluid d-flex justify-content-between flex-wrap">
            {skills.map(skill=>{
                return <SkillCard 
                    imgLogo={skill.imgLogo} 
                    skillName={skill.skillName} 
                    yearsExperience={skill.yearsExperience}
                />
            })}
        </Row>
        </>
    )
}