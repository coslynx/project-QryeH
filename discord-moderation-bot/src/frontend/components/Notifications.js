import React from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = React.useState([]);

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;