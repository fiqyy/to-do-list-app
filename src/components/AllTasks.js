import { useState } from 'react';
import tasks from '../data/tasks';

export default function AllTasks () {
    const [taskList, setTaskList] = useState(tasks);

    const handleCheck = (id) => {
        setTaskList(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="all-tasks-container">
            <h2 className="title">All Tasks</h2>
            {taskList.map((task) => (
                <div key={task.id} className="task-card">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => handleCheck(task.id)}
                        id={`task-${task.id}`}
                    />
                    <label htmlFor={`task-${task.id}`} className="task-title">{task.title}</label>
                </div>
            ))}
        </div>
    )
}
