import { useState } from "react";

function TodoCreate({createTodo}){
    const [todoTitle,setTodoTitle]=useState(' ');
    const handleKeyDown=(e)=>{
        if(e.key==='Enter'){
            createTodo(todoTitle);
            setTodoTitle(' ');
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todoTitle"
                value={todoTitle}
                placeholder="e.g. Playing football"
                id="todoInput"
                onChange={e=>{setTodoTitle(e.target.value)}}
                onKeyDown={handleKeyDown}
             />
        </form>
    )
}
export default TodoCreate;