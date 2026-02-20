export default function OverdueTasks({ tasks = [], onToggleComplete }) {
    const today = new Date();
    const overduetasks = tasks.filter(task => !task.completed && new Date(task.dueDate) < today);

    return (
    <div className="overdue-tasks-container">
        <div className='title'>
            <h2>Overdue Tasks</h2>
        </div>

      {overduetasks.length === 0 ? (
        <p>No Overdue tasks!</p>
        ) : (
        overduetasks.map(task => (
          <div key={task.id} className="task-card">
            <input type="checkbox" checked={!!task.completed} onChange={() => onToggleComplete && onToggleComplete(task.id)} />
            <span className="task-title">{task.title} - Due: {new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
        ))
      )}
    </div>
    )
}