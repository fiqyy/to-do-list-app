import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { useState } from 'react';
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



function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <Header setSidebarOpen={setSidebarOpen} />
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="main-content">
          <Routes>
            <Route path='/alltasks' element={<AllTasks />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/addtask' element={<AddTask />} />
            <Route path='/completedtasks' element={<CompletedTasks />} />
            <Route path='/pendingtasks' element={<PendingTasks />} />
            <Route path='/overduetasks' element={<OverdueTasks />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
