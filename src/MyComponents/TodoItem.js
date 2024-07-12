import React from "react";


// The code for the display of Todo list content.
export const TodoItem = (props) => {
    return (
        <div className="container1">
            <div className="sub-container">
                <h5>{props.Item.task_title}</h5>
                <p>{props.Item.task_description}</p>
                <button type='button' className="btn btn-sm btn-danger" onClick={()=>{props.onClickDoWhat(props.Item)}}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;