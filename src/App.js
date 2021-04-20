import React from 'react';
import './App.css';
import Header from './components/Header';
import Participants from './components/Participants';

import { useState } from 'react';

function App() {
  const [participants, setParticipants] = useState([
    { email: 'foobar@gmail.com' },
    { email: 'test@gmail.com' },
    { email: 'johndoe@example.com' },
    { email: 'mamed@memmedov.com' },
  ])

  const deleteItem = (email) => {
    setParticipants(participants.filter(item => item.email !== email));
  }

  return (
    <div className="container md:mx-auto max-w-lg h-screen flex items-center">
      <div className="w-full">
        <Header title="Qaliblərin interaktiv seçimi" />

        {participants.length
          ? <Participants list={participants} onDelete={deleteItem} /> :
          <div className="p-10 text-center text-gray-500 space-y-2">
            <div>Heç kim yoxdur</div>
            <div className="text-sm text-gray-300 w-1/2 mx-auto">Yeni iştirakçılar əlavə etmək üçün "Əlavə et" düyməsini sıxın</div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
