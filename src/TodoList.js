import TodoItem from "./TodoItem";


function TodoList({ todos, onChange, onDelete }) {
    return (
        todos.map((todo) =>
            <div key={todo.id} id="todoList">
                <TodoItem todo={todo} onChange={onChange} onDelete={onDelete} />
            </div>
        )
    );
}

export default TodoList;
