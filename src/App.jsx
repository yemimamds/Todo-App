// src/components/App.jsx
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todos from './Todos';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>My Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '12px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: '36px',
        color: '#000000',
        marginBottom: '24px',
    },
};

export default App;
