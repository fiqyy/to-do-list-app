export default function DashCard3 ({ tasks = [] }) {
    let overDue_tasks = 0;
    const today = new Date();
    const calculate_overdue = (task) => {
        const dueDate = new Date(task.dueDate);
        return dueDate < today;
    };
    tasks.forEach(task => {
        if (calculate_overdue(task) && task.completed === false) {
            overDue_tasks += 1;
        }
    });
    return (
        <div className="dash-card">
            <div className="card-title">
                <h4>Overdue Tasks</h4>
            </div>
            <div className="card-content3">
                <h2>{overDue_tasks}</h2>
                <p>You're {overDue_tasks} tasks late</p>
            </div>
            
        </div>
    )
}