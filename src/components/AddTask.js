
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddTask({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('low');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !dueDate) return;
        const newTask = {
            id: Date.now(),
            title: title.trim(),
            dueDate,
            priority,
            completed: false
        };
        if (onAddTask) onAddTask(newTask);
        // reset
        setTitle('');
        setDueDate('');
        setPriority('low');
        navigate('/alltasks');
    };

    return ( 
        <div className="add-task-container">
            <div className="title">
                <h2>Add New Task</h2>   
            </div>
            
            <form className="add-task-form" onSubmit={handleSubmit}>
                <label>
                    Task Name: 
                    <input type="text" name="taskName" value={title} onChange={e=>setTitle(e.target.value)} required />
                </label>
                <label>
                    Due Date:
                    <input type="date" name="dueDate" value={dueDate} onChange={e=>setDueDate(e.target.value)} required />
                </label>
                <label>
                    Priority:
                    <select name="priority" value={priority} onChange={e=>setPriority(e.target.value)} required>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </label>
                <button type="submit">Add Task</button>
            </form> 
        </div>
    );
}