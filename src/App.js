import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './MyComponents/Navbar.js';
import {Footer} from './MyComponents/Footer.js';
import {Todos} from './MyComponents/Todos.js';
import {AddToDo} from './MyComponents/AddToDo.js';

function App() {
  const onClickDelete = (task) => {
    console.log("Delete", task);

    setTodo_list(todo_list.filter((e) => {
      return e !== task;
    }));

  }

  const addToDo = (Task, Desc) => {
    let task_number = todo_list.length !== 0 ? todo_list[todo_list.length-1].task_number + 1: 1;
    let NewTask = {
      task_number: task_number,
      task_title: Task,
      task_description: Desc
    }
    setTodo_list([...todo_list, NewTask]);
  }


  const [todo_list, setTodo_list] = useState([
    {
      task_number: 1,
      task_title: "Mall Task",
      task_description: "Tomorrow you have to go to the mall, at time of 2:30 p.m. And have to buy some cloths from there."
    },
    {
      task_number: 2, 
      task_title: "Attend Meeting at ComIT",
      task_description: "Tomorrow you have to attend meeting at City hall, on time of 9 a.m."
    },
    {
      task_number: 3, 
      task_title: "Have lunch at Subway",
      task_description: "You have to have lunch at Subway with an important person on 12 pm."
    }
  ]);

  return (
    <div className="App">
      <Navbar NavName="ToDoc" isSearchBar={true}/>
      <AddToDo addToDo={addToDo} />
      <Todos list={todo_list} onClickDoWhat={onClickDelete}/>
      <Footer />
    </div>
  );
}

export default App;

