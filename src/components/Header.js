import logo from '../assets/images/todolistlogo.png';

export default function Header ({ setSidebarOpen }) {
    return (
        <div className="header">
            <div className='logo'>
                <img className= "logo" src={logo} alt="Logo" />
            </div>

            <div className='name'>
                <p>My To Do List</p>
            </div>

            <div className='search'>
                <input type="text" className="search" placeholder="Search tasks..." />
            </div>

            <button className="menu-button" onClick={() => setSidebarOpen(prev => !prev)}>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" alt="Menu Icon" />
            </button>
            
            


        </div>
    )
}