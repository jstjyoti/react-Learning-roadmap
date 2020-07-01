import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    //  Function for updating the value 
    function updateItem(event) {
        var newItem = event.target.value;
        setInputText(newItem);
    }

    //  Function for handling the user click action 
    function handleClick(event) {
        setItems(prevValues => {
            if (inputText === "") {
                return [...prevValues];
            }
            return [...prevValues, inputText];
        });
    }

    //  Function for deleting a particulat todo item 
    function deleteItem(id) {
        setItems(prevValues => {
            return prevValues.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={updateItem} type="text" value={inputText} />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map(function (item, index) {
                        return (
                            <ToDoItem
                                key={index}
                                id={index}
                                text={item}
                                onChecked={deleteItem}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
