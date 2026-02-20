export default function AllTasks({ tasks = [], onToggleComplete, onDeleteTask }) {
    return (
        <div className="all-tasks-container">
            <h2 className="title">All Tasks</h2>
            {tasks.map((task) => (
                <div key={task.id} className="task-card">
                    <input
                        type="checkbox"
                        checked={!!task.completed}
                        onChange={() => onToggleComplete && onToggleComplete(task.id)}
                        id={`task-${task.id}`}
                    />
                    <label htmlFor={`task-${task.id}`} className="task-title">{task.title}</label>
                    <button
                        className="delete-button"
                        onClick={() => {
                            const ok = window.confirm(`Delete task: "${task.title}"? This cannot be undone.`);
                            if (ok) onDeleteTask && onDeleteTask(task.id);
                        }}
                        title="Delete task"
                    >
                        <img src="https://img.icons8.com/ios-glyphs/20/000000/delete-sign.png" alt="Delete" />
                    </button>
                </div>
            ))}
        </div>
    )
}
