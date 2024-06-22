// src/components/Todos.jsx
import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div style={styles.todosContainer}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

const styles = {
    todosContainer: {
        width: '40%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default Todos;
