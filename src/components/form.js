import React from "react";

// function Form(){

// }
const Form = ({setInputText, setTodos, todos, inputText}) => {
    const InputTextHandler = (e) => {
        setInputText(e.target.value);
    
    }
    const SubmitTodohandler = (e) =>{
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}])
        setInputText('');
    }
    return (
        <form>
            
            <input placeholder="Type Here..." value = {inputText} onChange={InputTextHandler} type="text" className="todo-input" />
            <button onClick = {SubmitTodohandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            {/* <div className="select">
                 <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div> */}
        </form>
    );
}
export default Form;