self.addEventListener('install', event => {
    console.log('Service worker installed');
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activated');
  });
  
  self.addEventListener('notificationclick', event => {
    event.notification.close();
    // Add logic to handle notification click event, e.g., redirect to a specific page
  });
  
  // Listen for messages from the main thread
  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SEND_NOTIFICATION') {
      const { title, body } = event.data.payload;
      self.registration.showNotification(title, {
        body: body,
        icon: 'path/to/icon.png',
        // Other options...
      });
    }
  });
  