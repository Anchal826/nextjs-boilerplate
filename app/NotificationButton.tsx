// NotificationClient.tsx

import { ReactNode, useEffect } from 'react';

interface NotificationClientProps {
  children: ReactNode;
}

const NotificationClient = ({ children }: NotificationClientProps) => {
  useEffect(() => {
    // Register message event listener
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'NOTIFICATION_CLICKED') {
        console.log('Notification clicked');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return <>{children}</>;
};

export default NotificationClient;
