import { useState } from "react";

function TodoAdd({ onAdd }) {
    const [text, setText] = useState("");
    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                onAdd(text);
                setText("");
            }}>
            <input
                id="addInput"
                placeholder="What needs to be done?"
                type="text" value={text} onChange={(evt) => {
                    setText(evt.target.value);
                }} />
            <button id="addButton">Add</button>
        </form>
    )
}

export default TodoAdd;
