import React from 'react';

const ToDoList = (props) =>{

    return (
    <> 
    <li>{props.text}<button onClick={() => {
        props.onSelect(props.id);
    }}>X</button></li>
    </>
    );
};

export default ToDoList;