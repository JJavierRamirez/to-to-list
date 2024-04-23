import { useState } from "react";
import { AddTask } from "./components/AddTask"
import { TaskItem } from "./components/TaskItem";

export const ToDoList = () => {

    const [tasks, setTasks] = useState([]);

    const onAddTask = ( newTask ) => {
        if( tasks.includes(newTask)) return; 
        setTasks([newTask, ...tasks]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>To-Do list</h1>

        {/* Input */}
        <AddTask 
            onNewTask= { (value) => onAddTask(value) }
        />

        {/* Vaciar lista */}
        <br/>
        <button onClick={()=>{setTasks([])}}>Empty list</button>

        {/* Listado de tareas */}
        {
            tasks.map(task => {
                return(
                    <TaskItem 
                        key = { task }
                        task = { task }
                    />
                )
            })
        }

        
        
    </>
  )
}
