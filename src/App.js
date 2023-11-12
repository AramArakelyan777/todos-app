import { useReducer } from "react";
import './App.css';
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

function reducer(state, action) {
  if (action.type === "add") {
    return [
      ...state,
      { id: Math.random(), text: action.payload.text, completed: false }
    ];
  }
  else if (action.type === "delete") return state.filter((t) => t.id !== action.payload.id);
  else if (action.type === "clear-completed") return state.filter((todo) => !todo.completed);
  else if (action.type === "update") {
    return state.map((todo) => {
      if (todo.id === action.payload.updatedTodo.id) return action.payload.updatedTodo;
      return todo;
    });
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [
    {
      id: Math.random(),
      text: "Open The Todo App",
      completed: true
    }
  ]);

  return (
    <div className="App">
      <div>
        <header>
          <h1>todos</h1>
        </header>

        <TodoAdd onAdd={(text) => {
          if (text !== "") {
            dispatch({
              type: "add",
              payload: {
                text: text
              }
            });
          }
        }} />
        <TodoList
          todos={todos}
          onDelete={(todo) => {
            dispatch({
              type: "delete",
              payload: {
                id: todo.id
              }
            });
          }}
          onChange={(newTodo) => {
            dispatch({
              type: "update",
              payload: {
                updatedTodo: newTodo
              }
            });
          }}
        />
        <TodoFooter todos={todos} onClearCompleted={() => {
          dispatch({
            type: "clear-completed"
          });
        }} />
      </div>
    </div>
  );
}

export default App;
