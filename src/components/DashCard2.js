import tasks from '../data/tasks.json';
export default function DashCard2 () {
    let unfinished_tasks = 0;
    const today = new Date();
    const calculate_unfinished = (task) => {
        const dueDate = new Date(task.dueDate);
        return dueDate > today;
    };
    tasks.forEach(task => {
        if (calculate_unfinished(task) && task.completed === false) {
            unfinished_tasks += 1;
        }
    });
    return (
        <div className="dash-card">
            <div className="card-title">
                <h4>Upcoming Tasks</h4>
            </div>
            <div className="card-content2">
                <h2>{unfinished_tasks}</h2>
                <p>{unfinished_tasks} tasks pending</p>
            </div>
            
        </div>
    )
}