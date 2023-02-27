const TodoList = ({todos}) => {

    return (
        <div className="todo-list">
            {todos.map((todo)=>(
            <div className="todo-preview" key = {todo.id}>
                <h2>{todo.title}</h2>
                <p>Written by: {todo.author}</p>
            </div>
        ))}
        </div>
      );
}
 
export default TodoList;