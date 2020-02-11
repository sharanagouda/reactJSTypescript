import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}


const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        props.onAddTodo(enteredText);
    }
    // const todos = [{ id: 't1', text: "first comment" }]
    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label id="todo-text"> add todo </label>
                <input type="text" id="todo-text" ref={textInputRef} /><br />
                <button type="submit"> submit</button>
            </div>
        </form>
    )
}
export default NewTodo;