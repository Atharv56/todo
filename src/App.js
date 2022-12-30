import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/form'
import Todo from './components/Todo';
import TodoList from './components/todoList';

function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
       <header>
         <h1>Atharv's To-do app</h1>
       </header>
       <Form inputText = {inputText} todos = {todos} setTodos={setTodos} setInputText = {setInputText}/>
       <TodoList todos = {todos} setTodos = {setTodos}/>
    </div>
  );
}

export default App;
