function TodoItem({todo, onChange, onDelete}) {
    return (
        <label>
            <input type="checkbox" checked={todo.completed} onChange={(evt) => {
                onChange({
                    ...todo,
                    completed: evt.target.checked
                });
            }}/>
            <span>{todo.text}</span>
            <button id="removeButton" onClick={() => {
                onDelete(todo);
            }}>X</button>
        </label>
    );
}

export default TodoItem;
