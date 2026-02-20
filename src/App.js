import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import AllTasks from './components/AllTasks';
import PendingTasks from './components/PendingTasks';
import OverdueTasks from './components/OverdueTasks';
import Dashboard from './components/Dashboard';
import CompletedTasks from './components/CompletedTasks';
import AddTask from './components/AddTask';
import Reports from './components/Reports'
import Settings from './components/Settings'
import initialTasks from './data/tasks.json';
import { getCurrentUser, loadTasks, saveTasks, authenticate, setCurrentUser } from './utils/storage';



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState(() => getCurrentUser());
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const username = user && user.username ? user.username : null;
    const loaded = loadTasks(username, initialTasks);
    setTasks(loaded);
  }, [user]);

  const addTask = (task) => {
    setTasks(prev => {
      const next = [...prev, task];
      const username = user && user.username ? user.username : 'default';
      saveTasks(username, next);
      return next;
    });
  };

  const toggleComplete = (id) => {
    setTasks(prev => {
      const next = prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
      const username = user && user.username ? user.username : 'default';
      saveTasks(username, next);
      return next;
    });
  };

  const deleteTask = (id) => {
    setTasks(prev => {
      const next = prev.filter(t => t.id !== id);
      const username = user && user.username ? user.username : 'default';
      saveTasks(username, next);
      return next;
    });
  };

  const login = (username, password) => {
    const ok = authenticate(username, password);
    if (ok) {
      setCurrentUser(ok);
      setUser(ok);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header setSidebarOpen={setSidebarOpen} user={user} onLogin={login} onLogout={logout} />
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="main-content">
          <Routes>
            <Route path='/alltasks' element={<AllTasks tasks={tasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />} />
            <Route path='/' element={<Dashboard tasks={tasks} />} />
            <Route path='/addtask' element={<AddTask onAddTask={addTask} />} />
            <Route path='/completedtasks' element={<CompletedTasks tasks={tasks} onToggleComplete={toggleComplete} />} />
            <Route path='/pendingtasks' element={<PendingTasks tasks={tasks} onToggleComplete={toggleComplete} />} />
            <Route path='/overduetasks' element={<OverdueTasks tasks={tasks} onToggleComplete={toggleComplete} />} />
            <Route path='/reports' element={<Reports tasks={tasks} />} />
            <Route path='/settings' element={<Settings user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
