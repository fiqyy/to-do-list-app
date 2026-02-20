import { useEffect, useState } from 'react';
import { listUsers, getUser, migrateTasks } from '../utils/storage';

export default function Settings({ user, setUser }) {
    const [users, setUsers] = useState([]);
    const [selectedSwitch, setSelectedSwitch] = useState('');
    const [migrateFrom, setMigrateFrom] = useState('');
    const [overwrite, setOverwrite] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        setUsers(listUsers());
    }, []);

    const handleSwitch = () => {
        if (!selectedSwitch) return;
        const u = getUser(selectedSwitch);
        if (u) {
            setUser({ username: selectedSwitch });
        }
    };

    const handleMigrate = () => {
        if (!migrateFrom) return setMessage('Select a source user');
        const target = user && user.username ? user.username : null;
        if (!target) return setMessage('Please switch to a target user first');
        const confirmMsg = overwrite
            ? `Migrate and overwrite tasks from "${migrateFrom}" to "${target}"?`
            : `Migrate tasks from "${migrateFrom}" to "${target}" (duplicates will be preserved)?`;
        if (!window.confirm(confirmMsg)) return;
        const ok = migrateTasks(migrateFrom, target, { overwrite });
        setMessage(ok ? 'Migration successful' : 'Migration failed');
    };

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <section className="settings-section">
                <h3>Switch User</h3>
                <div className="settings-controls">
                    <select value={selectedSwitch} onChange={e => setSelectedSwitch(e.target.value)}>
                        <option value="">-- Select User --</option>
                        {users.map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                    <button onClick={handleSwitch}>Switch</button>
                    <div style={{ marginLeft: 12 }}><strong>Current:</strong> {user && user.username ? user.username : 'None'}</div>
                </div>
            </section>

            <section className="settings-section">
                <h3>Migrate Tasks</h3>
                <div className="settings-controls">
                    <select value={migrateFrom} onChange={e => setMigrateFrom(e.target.value)}>
                        <option value="">-- From user --</option>
                        {users.map(u => <option key={u} value={u}>{u}</option>)}
                    </select>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <input type="checkbox" checked={overwrite} onChange={e => setOverwrite(e.target.checked)} /> Overwrite
                    </label>
                    <button onClick={handleMigrate}>Migrate</button>
                </div>
                {message && <p className="settings-message">{message}</p>}
            </section>
        </div>
    )
}