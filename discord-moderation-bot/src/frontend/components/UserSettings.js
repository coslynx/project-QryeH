import React from 'react';

const UserSettings = () => {
  const [settings, setSettings] = React.useState({
    moderation: true,
    notifications: true,
    language: 'English',
    theme: 'Light',
  });

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={settings.moderation}
          onChange={() => handleToggle('moderation')}
        />
        Enable Moderation Tools
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={settings.notifications}
          onChange={() => handleToggle('notifications')}
        />
        Enable Notifications
      </label>
      <br />
      <label>
        Language:
        <select name="language" value={settings.language} onChange={handleSelectChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </label>
      <br />
      <label>
        Theme:
        <select name="theme" value={settings.theme} onChange={handleSelectChange}>
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </label>
    </div>
  );
};

export default UserSettings;