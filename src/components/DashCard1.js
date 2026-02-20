export default function DashCard1 ({ tasks = [] }) {
    const finished_tasks = tasks.filter(task => task.completed === true);

    
    return (
        <div className="dash-card">
            <div className="card-title">
                <h4>Tasks Completed</h4>
            </div>
            <div className="card-content">
                <h2>{finished_tasks.length}</h2>
                <p>You've completed {finished_tasks.length} tasks</p>
            </div>
            
        </div>
    )
}