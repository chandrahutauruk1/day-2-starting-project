export default function TabButton({children, onSelect}){
    // document.querySelector('button').addEventListener('click', ()=>{
    //     console.log("click button")
    // })
    // function clickHandle(){
    //     console.log("this is click and function")
    // }

    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}