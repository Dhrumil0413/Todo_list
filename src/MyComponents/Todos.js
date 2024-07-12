import React from 'react';
import TodoItem from './TodoItem.js'

export const Todos = (props) => {
    let HeadingStyler = {
        textAlign: 'left',
    }
    return (
        <div className='container'>
            <h2 style={HeadingStyler}>ToDo List</h2>
            {
                props.list.length !== 0 ? 
                props.list.map((ListItem, index) => {
                    return < TodoItem key={index} Item={ListItem} onClickDoWhat={props.onClickDoWhat} />
                })  : 
                "There is no content to Show"
            }
        </div>
    )
}