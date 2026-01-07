import { Link, useLocation } from 'react-router-dom';

export default function SideBar ({ sidebarOpen, setSidebarOpen }) {
    const location = useLocation();
    const handleLinkClick = () => {
        setSidebarOpen(false);
    };
    return (
        <div className={`side-bar ${sidebarOpen ? 'open' : ''}`}>
            <div className="side-bar-header">

            </div>
            <div className="side-bar-components">
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}><Link to='/' onClick={handleLinkClick}>Dashboard</Link></li>
                    <li className={location.pathname === '/alltasks' ? 'active' : ''}><Link to='/alltasks' onClick={handleLinkClick}>All Tasks</Link></li>
                    <li className={location.pathname === '/completedtasks' ? 'active' : ''}><Link to='/completedtasks' onClick={handleLinkClick}>Completed Tasks</Link></li>
                    <li className={location.pathname === '/pendingtasks' ? 'active' : ''}><Link to='/pendingtasks' onClick={handleLinkClick}>Pending Tasks</Link></li>
                    <li className={location.pathname === '/overduetasks' ? 'active' : ''}><Link to='/overduetasks' onClick={handleLinkClick}>Overdue Tasks</Link></li>
                    <li className={location.pathname === '/settings' ? 'active' : ''}><Link to='/settings' onClick={handleLinkClick}>Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}
