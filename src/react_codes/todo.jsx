import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
    const { theme, toggleTheme } = useTheme();
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [newTaskDay, setNewTaskDay] = useState('Monday');
    const [newTaskTime, setNewTaskTime] = useState('00:00');
    const [showAddTask, setShowAddTask] = useState(false);
    const [showRemoveTask, setShowRemoveTask] = useState(false);

    const headerStyle = {
        backgroundColor: theme === 'light' ? '#f05d5d' : '#444',
        padding: '10px',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const logoStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textDecoration: 'none',
    };

    const usernameStyle = {
        backgroundColor: theme === 'light' ? '#f08d8d' : '#555',
        padding: '10px 20px',
        borderRadius: '20px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
    };

    const circleStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: theme === 'light' ? '#d9a3a3' : '#777',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const sidebarStyle = {
        position: 'absolute',
        top: '100px',
        left: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const buttonStyle = {
        backgroundColor: theme === 'light' ? '#f05d5d' : '#555',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        margin: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const verticalTextStyle = {
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        fontSize: '24px',
        color: theme === 'light' ? '#8c8c8c' : '#ccc',
        marginTop: '20px',
    };

    const contentStyle = {
        marginLeft: '80px',
        marginTop: '20px',
        backgroundColor: theme === 'light' ? '#f05d5d' : '#555',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: theme === 'light' ? '#000' : '#fff',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
    };

    const thStyle = {
        backgroundColor: theme === 'light' ? '#f8c8c8' : '#666',
        padding: '10px',
        border: `1px solid ${theme === 'light' ? '#f05d5d' : '#888'}`,
        fontWeight: 'bold',
        color: 'black',
    };

    const tdStyle = {
        padding: '10px',
        border: `1px solid ${theme === 'light' ? '#f05d5d' : '#888'}`,
        verticalAlign: 'top',
        color: theme === 'light' ? '#000' : '#fff',
        backgroundColor: theme === 'light' ? '#ffdfdf' : '#777',
        wordWrap: 'break-word',
    };

    const addTask = () => {
        setShowAddTask(true);
        setShowRemoveTask(false);
    };

    const confirmAddTask = () => {
        setTasks([...tasks, { task: newTask, day: newTaskDay, time: newTaskTime }]);
        setNewTask('');
        setNewTaskDay('Monday');
        setNewTaskTime('00:00');
        setShowAddTask(false);
    };

    const removeTask = () => {
        setShowRemoveTask(true);
        setShowAddTask(false);
    };

    const deleteTask = (indexToRemove) => {
        setTasks(tasks.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#f8c8c8' : '#333', fontFamily: 'Arial, sans-serif', height: '100vh' }}>
            <div style={headerStyle}>
                <Link to="/home" style={logoStyle}>2DO</Link>
                <div style={usernameStyle}>
                    <div style={circleStyle}></div>
                    Username
                </div>
                <button onClick={toggleTheme} style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}>
                    {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </div>
            <div style={sidebarStyle}>
                <button style={buttonStyle} onClick={addTask}>+</button>
                <button style={buttonStyle} onClick={removeTask}>-</button>
                <div style={verticalTextStyle}>To-Do List</div>
            </div>
            <div style={contentStyle}>
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thStyle}>Time</th>
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                            <th key={day} style={thStyle}>{day}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {Array.from({ length: 24 }, (_, i) => (
                        <tr key={i}>
                            <td style={tdStyle}>{`${i.toString().padStart(2, '0')}:00`}</td>
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                <td key={day} style={tdStyle}>
                                    {tasks
                                        .filter(task => task.time.startsWith(`${i.toString().padStart(2, '0')}:`) && task.day === day)
                                        .map((task, index) => (
                                            <div key={index} style={{ cursor: 'pointer' }} onClick={() => deleteTask(index)}>
                                                {task.time} - {task.task}
                                            </div>
                                        ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {showAddTask && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Task</h5>
                                <button type="button" className="btn-close" onClick={() => setShowAddTask(false)}></button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Task"
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                />
                                <select className="form-select mt-2" value={newTaskDay} onChange={(e) => setNewTaskDay(e.target.value)}>
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                                <input
                                    type="time"
                                    className="form-control mt-2"
                                    value={newTaskTime}
                                    onChange={(e) => setNewTaskTime(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowAddTask(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={confirmAddTask}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showRemoveTask && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Remove Task</h5>
                                <button type="button" className="btn-close" onClick={() => setShowRemoveTask(false)}></button>
                            </div>
                            <div className="modal-body">
                                <ul className="list-group">
                                    {tasks.map((task, index) => (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                            {task.task} ({task.day} at {task.time})
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>Remove</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowRemoveTask(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Todo;