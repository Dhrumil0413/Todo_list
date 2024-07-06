import React from "react";
import '../App.css';

export const TodoItem = () => {
    const look = {
        width: '100%'
        
    }
    return (

        <div className="container1">
            <h5>Todo Title</h5>
            <p>Todo Description</p>
            <button type='button' className="btn btn-sm btn-danger">Delete</button>
        </div>

        
            
            // <div className="card" style={look}>
            // <div className="card-body">
            //     <h5 className="card-title">Card title</h5>
            //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //     <button type="button" className="btn btn-sm btn-danger">Danger</button>
            // </div>
            // </div>
    )
}

export default TodoItem;