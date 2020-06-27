import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
