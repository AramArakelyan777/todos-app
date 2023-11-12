function TodoFooter({todos, onClearCompleted}) {
    let completed = todos.filter((todo) => {
        return todo.completed;
    }).length;
    return (
        <div id="todoFooter">
            <span>{completed}/{todos.length} completed</span>
            <button id="clearCompletedButton" onClick={(evt) => {
                onClearCompleted();
            }}>Clear Completed</button>
        </div>
    );
}

export default TodoFooter;
