import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';


function App() {
  const [inputlist,setInput] = useState();
  const [items, setitems] = useState([]);

  const inputevent = (event) =>{
    setInput(event.target.value);
    
  }; 
  const addevent = ()=>{
    setitems((olditems)=>{
      return [...olditems,inputlist]
    });
    setInput('')
  };
  const closeevent = (id) =>{
    setitems((olditems)=>{
      return olditems.filter((arrele,index) => {
         return index!== id; 
      });
    });
  };

  return (
    <>
    <div className="container">
    <h1>TODO List</h1>
    <input type="text" placeholder="Add Item" onChange={inputevent} value={inputlist}/>
    <button className="addbutton" onClick={addevent}>+</button>
    <ul>
        {items.map((itemval,index)=>{
          return <ToDoList 
          text= {itemval} 
          key={index} 
          id={index} 
          onSelect={closeevent} />
        })}
    </ul>
    </div>
    <h4>Made by Dibyendu</h4>
    </>
  );
}

export default App;
