// NotificationButton.tsx

import React, { useEffect } from 'react';

interface NotificationButtonProps {
  onClick: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ onClick }) => {
  useEffect(() => {
    const handleClick = () => {
      onClick();
    };

    const button = document.getElementById('notificationButton');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, [onClick]);

  return (
    <button id="notificationButton">Send Notification</button>
  );
};

export default NotificationButton;
