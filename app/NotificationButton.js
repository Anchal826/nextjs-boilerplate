// components/NotificationButton.js
import React from 'react';

const NotificationButton = () => {
  const handleNotificationClick = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Hello!', {
            body: 'This is a notification from your Next.js app!'
          });
        }
      });
    }
  };

  return (
    <button onClick={handleNotificationClick}>
      Show Notification
    </button>
  );
};

export default NotificationButton;
