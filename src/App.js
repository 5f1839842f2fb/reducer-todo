import React, { useReducer, useState } from 'react';
import { todoReducer, initialTodoList } from './reducers/todoreducer'
import './App.css';
import TodoList from './TodoList'

function App() {
  const [todoState, dispatchTodo] = useReducer(todoReducer, initialTodoList)
  const [formState, setFormState] = useState();
  
  const handleSubmit = event => {
    event.preventDefault()
    console.log("handleSubmit", formState)
    dispatchTodo({type: 'ADD_TODO', payload: formState})
  }

  return (
    <div className="App">
      {/* {todoState.list.map(element => {
        return <h3>{element.task}</h3>
      })}
      <form onSubmit={handleSubmit}>
        <input onChange={event => {setFormState(event.target.value)}} placeholder="New todo"></input>
      </form> */}
      <TodoList todoData={todoState.list} dispatch={dispatchTodo}/>
    </div>
  );
}

export default App;
