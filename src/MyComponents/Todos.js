import React from 'react';
import TodoItem from './TodoItem.js'

export const Todos = () => {
    return (
        <div className='container'>
            <h2>ToDo List</h2>
            <TodoItem />
        </div>
    )
}