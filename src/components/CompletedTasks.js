import tasks from '../data/tasks.json';
export default function CompletedTasks() {
    const completedTasks = tasks.filter(task => task.completed === true);

    return (
        <div className="completed-tasks-container">
            <div className="title">
                <h2>Completed Tasks</h2>
            </div>
            {completedTasks.length === 0 ? (
                <p>No completed tasks available</p>
            ) : (
                completedTasks.map(task => (
                    <div key={task.id} className="task-card">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            readOnly
                            id={`completed-task-${task.id}`}
                        />
                        <label htmlFor={`completed-task-${task.id}`} className="task-title">{task.title}</label>
                    </div>
                ))
            )}
        </div>
    );
}
