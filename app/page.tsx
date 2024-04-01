// page.tsx

import type { NextPage } from 'next';
import NotificationButton from '../components/NotificationButton';

const Screen1: NextPage = () => {
  const handleNotificationClick = () => {
    // Logic to send a notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Notification Title', {
        body: 'Notification Body',
      });
    } else if ('Notification' in window && Notification.permission !== 'denied') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          new Notification('Notification Title', {
            body: 'Notification Body',
          });
        }
      });
    }
  };

  return (
    <div>
      <div className={styles.errorMsgsection2}>
        <div className={styles.section2ctaButton}>
          <NotificationButton onClick={handleNotificationClick} />
        </div>
      </div>
      {/* Other content */}
    </div>
  );
};

export default Screen1;
