import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
        };

        addTodo(newTodo);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
                style={styles.input}
            />
            <button type="submit" style={styles.addButton}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    style={styles.icon}
                >
                    <path d="M19 11h-6V5c0-.6-.4-1-1-1s-1 .4-1 1v6H5c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1v-6h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span style={styles.buttonText}>Add Todo</span>
            </button>
        </form>
    );
}

const styles = {
    form: {
        display: 'flex',
        marginBottom: '24px',
    },
    input: {
        flex: '1',
        padding: '12px',
        fontSize: '16px',
        borderRadius: '4px 0 0 4px',
        border: '1px solid #ffa500',  // Ubah warna border menjadi oranye
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        outline: 'none',
    },
    addButton: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ff69b4',  // Ubah warna background menjadi pink
        color: 'white',
        border: 'none',
        borderRadius: '0 4px 4px 0',
        padding: '12px 16px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    icon: {
        marginRight: '8px',
    },
    buttonText: {
        fontWeight: 'bold',
    },
};

export default TodoForm;
