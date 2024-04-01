// components/NotificationButton.tsx
import React from 'react';

interface NotificationButtonProps {
  onClick: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ onClick }) => {
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
