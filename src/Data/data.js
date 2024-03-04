import componentImg from '../Assets/components.png'
import propsImg from '../Assets/config.png'
import jsxImg from '../Assets/jsx-ui.png'
import stateImg from '../Assets/state-mgmt.png'

export const CORE_CONCEPT_ITEM = [{
        image: componentImg,
        title: 'Component',
        description: 'This is component',
    },
    {
        image: propsImg,
        title: 'Props',
        description: 'This is Props',
    },
    {
        image: jsxImg,
        title: 'JSX Image',
        description: 'This is Props',
    },
    {
        image: stateImg,
        title: 'State',
        description: 'This is State',
    }

]

export const Examples = {
    components: {
        title: 'Components',
        description: 'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional css + JS) that render some output',
        code: `
function Welcome(){
    return <h1>Hello, World!</h1>;
}`,
    },
    jsx: {
        title: 'JSX',
        description: 'JSX is a syntax extension of javascript. It is similar to a template language, but it has fulll power of Javascript(eg, it may output dynamic content).',
        code: `
<div> 
    <h1>Welcome {username}</h1>
    <p>Time to learn React!</p>
</div>`,
    },
    props: {
        title: 'Props',
        description: 'Component accept arbitary inputs called props. They are like function arguments.',
        code: `
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}
        `
    },
    state: {
        title: 'State',
        description: 'State allow React Component to chenage their output over time in response to user actions, network responses, and anything else',
        code: `
function Counter(){
    const {isVisible, setIsVisible} = useState(false);
    fucntion handleCLick(){
        setIsVisible(true);
    }
}
        `,
    }
}