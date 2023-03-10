import React from "react";
import Todo from "./Todo"
const TodoList = ({todos, setTodos}) => {

    return(
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
            <Todo todos = {todos} todo = {todo} setTodos = {setTodos} text = {todo.text} key = {todo.id}/>
        )
        )}
      </ul>
    </div>
    );
}

export default TodoList;