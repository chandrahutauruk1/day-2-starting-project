import reactImg from "../../Assets/react-core-concepts.png"
import './Header.css'

const titleData = ['Crucial', 'Core', 'Fundamental']

function getRandomInt(max){
    return Math.floor(Math.random() * (max+1));
}

export default function Headers(){
    const getReactDescRandom = titleData[getRandomInt(titleData.length) - 1]
    
    return(
        <header>
            <img src={reactImg} alt="" />
            <h1>React Essentials</h1>
            <p>{getReactDescRandom} React concepts you will need for almost any app you are going to build!</p>
        </header>
    );
}