import React, { useState } from "react";
import TodoList from "./TodoList";
import NewTodo from "./NewTodo";
import Todo from "./todo.model";

const TodoComponent: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const todoAddHandler = (text: string) => {
        console.log("hi,", text);
        setTodos(prevTodos => [
            ...prevTodos,
            { id: Math.random().toString(), text: text }
        ])
    }

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId)
        })
    }
    return <div>
        <NewTodo onAddTodo={todoAddHandler} />
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
}
export default TodoComponent;