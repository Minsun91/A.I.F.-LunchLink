import React, { useEffect } from 'react';
import { requestForToken, onMessageListener } from './firebase';
import LunchSelector from './components/LunchSelector';

function App() {
  useEffect(() => {
    requestForToken();

    onMessageListener()
      .then((payload) => {
        console.log('Message received. ', payload);
        alert('푸시 알림: ' + payload.notification.title);
      })
      .catch((err) => console.log('Failed to receive message: ', err));
  }, []);

  return (
    <div className="App">
      <LunchSelector />
    </div>
  );
}

export default App;
