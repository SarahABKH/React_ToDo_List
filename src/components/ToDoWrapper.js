import React,{useState} from 'react'
import ToDoForm from './ToDoForm.js'
import {v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo.js';
import EditToDoForm from './EditToDoForm.js';
uuidv4();

const ToDoWrapper = () => {

    const [todos,setTodos]=useState([])

    const addTodo= todo=>{
        setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}])
        console.log(todos)
    }
    const toggleComplete= taskid =>{
        setTodos(todos.map(todo=>todo.id===taskid ?
            {... todo,completed: !todo.completed}:todo))

    }
    const deleteTodo= id=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }
    const editTodo= id=>{
        setTodos(todos.map(todo=> todo.id===id ?{
            ...todo,isEditing:!todo.isEditing}:todo
        ))
    }
    const editTask=(task,id)=>{
        setTodos(todos.map(todo=>todo.id===id?
            {...todo,task, isEditing:!todo.isEditing}:todo)
            )
    }

  return (
    <div className='TodoWrapper'>
    <h1>To Do List</h1>
      <ToDoForm addTodo={addTodo} ></ToDoForm>
      {todos.map((todo,index )=>(
        todo.isEditing? (<EditToDoForm editTodo={editTask} task={todo}/>):
        <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
      ))}
      
    </div>
  )
}

export default ToDoWrapper
