export default function PendingTasks({ tasks = [], onToggleComplete }) {
    const today = new Date();
    const pendingTasks = tasks.filter(task => !task.completed && new Date(task.dueDate) >= today);

    return (
    <div className="pending-tasks-container">
        <div className='title'>
            <h2>Pending Tasks</h2>
        </div>

      {pendingTasks.length === 0 ? (
        <p>No pending tasks!</p>
        ) : (
        pendingTasks.map(task => (
          <div key={task.id} className="task-card">
            <input type="checkbox" checked={!!task.completed} onChange={() => onToggleComplete && onToggleComplete(task.id)} />
            <span className="task-title">{task.title} - Due: {new Date(task.dueDate).toLocaleDateString()}</span>
            </div>
        ))
      )}
    </div>
  );
}
