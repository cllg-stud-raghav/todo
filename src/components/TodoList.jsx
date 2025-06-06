import TodoShow from "./TodoShow";
function TodoList({todoList}){
    const renderList=todoList.map(todo=>{
        return <TodoShow key={todo.id} title={todo.title} />
    })
    return (
        <section>
            <ul className="todoList">
                {renderList}
            </ul>
        </section>
    )
}
export default TodoList;