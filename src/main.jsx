import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToDoList } from './ToDoList.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList></ToDoList>
  </React.StrictMode>,
)
