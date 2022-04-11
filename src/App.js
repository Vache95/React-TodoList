import {React,useReducer,useState} from 'react'
import Todo from './components/Todo'
import {todoiniteial,todoReduser} from './components/todoReduser'
import './App.scss'

export default function App() {
  const [todo,dispatch] = useReducer(todoReduser,todoiniteial)
 return (
   <div className="wrapper">
     <Todo todo={todo} dispatch={dispatch}/>
   </div>
  )
}

