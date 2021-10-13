import { useState } from "react";

export default function ShoppingList(){

    //hook that will add to the list
    const [randomNum, setRandomNum] = useState([]);
    const [itemInput, setItemInput] = useState('')





    //function that adds a random number
    function addRandomNumber(){
        setRandomNum(
            [...randomNum, {
                id: randomNum.length,
                value: Math.floor(Math.random() * 10 + 1)
            }]
        )
    }

    return(

        <div>

            <ul>

                {randomNum.map((r)=> <li key = {r.id}>{r.value}</li>)}


            </ul>


            <button>add</button>
            <button>remove</button>
            <input type="text" onInput={(e) => {setItemInput(e)}}></input>

            <button onClick = {addRandomNumber}>add random number</button>

        </div>
        
    )
}


//TODO: add items to list 
//TODO: remove items from list