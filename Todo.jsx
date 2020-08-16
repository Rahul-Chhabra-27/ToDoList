import React,{useState} from 'react'
import './T.css'
import TodoList from './TodoList';
function Todo() {

    const [state,setState] = useState("");
    const [items,setItems] = useState([]);
      


    const itemEvent = (event) => {
       setState(event.target.value);
    }

    const listofItems = () => {
      setItems((oldItems) => {
       return[...oldItems, state];
   })
      setState("");
 };

    return (
       <>

<div className="div">
     
     <br>
     </br>

     <h1> ToDo List</h1>
     <br></br>
     <input type="text" placeholder="Enter your items" onChange={itemEvent} value={state} ></input>
     <button onClick={listofItems}>+</button>
     <br></br>
     <div className="ole"></div>
   { 
    items.map( (itemval) => {
   return<TodoList list={itemval}></TodoList>

    })

   }


     
</div>




       </>
    )
}

export default Todo
