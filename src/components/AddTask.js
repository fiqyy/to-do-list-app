
export default function  AddTask () {
    return ( 
        <div className="add-task-container">
            <div className="title">
                <h2>Add New Task</h2>   
            </div>
            
            <form className="add-task-form">
                <label>
                    Task Name: 
                    <input type="text" name="taskName" required />
                </label>
                <label>
                    Due Date:
                    <input type="date" name="dueDate" required />
                </label>
                <label>
                    Priority:
                    <select name="priority" required>
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