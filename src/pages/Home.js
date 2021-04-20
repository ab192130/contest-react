import { useState } from 'react';

import Header from '../components/Header';
import Participants from '../components/Participants';
import AddParticipant from '../components/AddParticipant';
import Winner from '../components/Winner';

const Home = () => {
    const [participants, setParticipants] = useState([
        { email: 'shebnem@gmail.com' },
        { email: 'sahib@gmail.com' },
        { email: 'kenan@example.com' },
        { email: 'mamed@memmedov.com' },
    ]);

    const [winner, setWinner] = useState(null);

    const [showAdd, setShowAdd] = useState(false);

    const deleteItem = (email) => {
        setParticipants(participants.filter(item => item.email !== email));
    }

    const addParticipant = (participant) => {
        console.log(participant);
        setParticipants([...participants, participant]);
        setShowAdd(false);
    }

    const onStart = () => {
        var winner = participants[Math.floor(Math.random() * participants.length)];

        setWinner(winner);
    }

    return (
        <div>
            <Header title="Qaliblərin interaktiv seçimi"
                onToggleAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} onStart={onStart} />

            {showAdd && <AddParticipant onAdd={addParticipant} />}

            {winner && <Winner data={winner}/>}

            {participants.length 
                ? <Participants list={participants} onDelete={deleteItem} /> :
                <div className="p-10 text-center text-gray-500 space-y-2">
                    <div>Heç kim yoxdur</div>
                    <div className="text-sm text-gray-300 w-1/2 mx-auto">Yeni iştirakçılar əlavə etmək üçün "Əlavə et" düyməsini sıxın</div>
                </div>
            }
        </div>
    )
}

export default Home
