import "./CoreConcepts.css"
import componentImg from "../../Assets/components.png"

export default function CoreConcept(props){
    return(
        <li>
            <img src={props.Image} alt="" />
            <h3>{props.title} </h3>
            <p>{props.description}</p>
        </li>
    )
}