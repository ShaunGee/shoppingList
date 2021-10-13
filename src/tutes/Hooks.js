import { useState } from "react"

export default function Hooks(){

    const a = ['23', '34']
    const num = 1;

    const [count, setCount] = useState(0)
    const [l, setList] = useState([])

    function addToList(){
        
  
        setList([...l,{
            id: l.length,
            value: Math.floor(Math.random()*10)+1
        }])
        console.log(l);
    }

    return(
        <div>
            <ul>

                {l.map(item => <li key={item.id}>{item.value}</li>)}

            </ul>

            <button onClick = {() => setCount(count +1)}>counts = {count}</button>
            <button onClick = {addToList}>add to list</button>

        </div>
    )
}

