export function getCurrentUser() {
  try {
    const raw = localStorage.getItem('todo_user');
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('getCurrentUser error', e);
    return null;
  }
}

export function setCurrentUser(userObj) {
  try {
    localStorage.setItem('todo_user', JSON.stringify(userObj));
  } catch (e) {
    console.error('setCurrentUser error', e);
  }
}

// Simple auth: if user exists check password; if not, create user record.
export function authenticate(username, password) {
  try {
    const key = `user_${username}`;
    const raw = localStorage.getItem(key);
    if (raw) {
      const stored = JSON.parse(raw);
      return stored.password === password ? { username } : null;
    }
    // create new user
    localStorage.setItem(key, JSON.stringify({ username, password }));
    return { username };
  } catch (e) {
    console.error('authenticate error', e);
    return null;
  }
}

export function getUser(username) {
  try {
    const key = `user_${username}`;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('getUser error', e);
    return null;
  }
}

export function listUsers() {
  try {
    const users = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('user_')) {
        users.push(key.replace('user_', ''));
      }
    }
    return users;
  } catch (e) {
    console.error('listUsers error', e);
    return [];
  }
}

export function migrateTasks(fromUser, toUser, options = { overwrite: false }) {
  try {
    const from = loadTasks(fromUser, []);
    const to = loadTasks(toUser, []);
    let result = [];
    if (options.overwrite) {
      result = from.slice();
    } else {
      const existingIds = new Set(to.map(t => t.id));
      const merged = to.concat(from.filter(t => !existingIds.has(t.id)));
      result = merged;
    }
    saveTasks(toUser, result);
    return true;
  } catch (e) {
    console.error('migrateTasks error', e);
    return false;
  }
}

export function loadTasks(user, fallback = []) {
  try {
    const key = `tasks_${user}`;
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
    // seed localStorage with fallback tasks
    if (fallback && fallback.length) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
  } catch (e) {
    console.error('loadTasks error', e);
  }
  return [];
}

export function saveTasks(user, tasks) {
  try {
    const key = `tasks_${user}`;
    localStorage.setItem(key, JSON.stringify(tasks));
  } catch (e) {
    console.error('saveTasks error', e);
  }
}
