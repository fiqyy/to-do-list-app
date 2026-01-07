import {PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import tasks from '../data/tasks.json';

// Compute counts for Completed, Pending, Overdue
const today = new Date();
const completedCount = tasks.filter(task => task.completed).length;
const pendingCount = tasks.filter(task => !task.completed && new Date(task.dueDate) >= today).length;
const overdueCount = tasks.filter(task => !task.completed && new Date(task.dueDate) < today).length;

const jsonData = [
  { name: 'Completed', value: completedCount },
  { name: 'Pending', value: pendingCount },
  { name: 'Overdue', value: overdueCount }
];

// Define colors for each slice: green for Completed, yellow for Pending, red for Overdue
const COLORS = ['#00C49F', '#FFBB28', '#ff0000ff'];

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300} className="reports-container">
      <h2 className='title'>Reports</h2>
      <PieChart>
        <Pie
          data={jsonData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {jsonData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
