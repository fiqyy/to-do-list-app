import DashCard3 from "./DashCard3";
import DashCard2 from "./DashCard2";
import DashCard1 from "./DashCard1";
import Reports from "./Reports.js";
import Settings from "./Settings";
import AddTask from "./AddTask";
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import { BiPlusCircle } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";


export default function Dashboard () {
    const location = useLocation();
    return (
        
        <div className="dashboard">
            <div className="dash-header">
                <nav>
                    <ul>
                        <li className={location.pathname === "/addtask" ? "active" : ""}> <Link to='addtask'><BiPlusCircle /> Add New Task</Link></li>
                        <li className={location.pathname === "/reports" ? "active" : ""}><Link to="/reports"><TbReportAnalytics /> Reports</Link></li>
                        <li className={location.pathname === "/settings" ? "active": ""}><Link to="/settings"><IoIosSettings /> Settings</Link></li>
                    </ul>
                </nav>
            </div>
            
            <div className="dash-cards">
                <DashCard1 />
                <DashCard2 />
                <DashCard3 />
            </div>
                <Routes>
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="addtask" element={<AddTask />} />
                </Routes>
        </div>
    )
}