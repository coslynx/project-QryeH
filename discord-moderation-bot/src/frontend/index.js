import React from 'react';
import Dashboard from './components/Dashboard';
import UserSettings from './components/UserSettings';
import Notifications from './components/Notifications';

function App() {
  return (
    <div>
      <Dashboard />
      <UserSettings />
      <Notifications />
    </div>
  );
}

export default App;