// src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div style={styles.todoItem}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={styles.checkbox}
            />
            <span style={todo.completed ? styles.completed : styles.text}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>
                Delete
            </button>
        </div>
    );
};

const styles = {
    todoItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid #f4f4f4',
        padding: '8px',
        marginBottom: '8px',
        borderRadius: '4px',
        backgroundColor: '#ffffff',
        width: '100%',
    },
    checkbox: {
        marginRight: '8px',
    },
    text: {
        fontSize: '24px',
        color: '#000000',
    },
    completed: {
        fontSize: '24px',
        textDecoration: 'line-through',
        color: '#888888',
    },
    deleteButton: {
        backgroundColor: '#87CEEB',
        border: 'none',
        color: 'white',
        padding: '6px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default TodoItem;
