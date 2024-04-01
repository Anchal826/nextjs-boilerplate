import React from 'react';

interface NotificationButtonProps {
  onClick: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button onClick={handleClick}>Send Notification</button>
  );
};

export default NotificationButton;
