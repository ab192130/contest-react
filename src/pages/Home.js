import { useState } from 'react';

import Header from '../components/Header';
import Participants from '../components/Participants';
import AddParticipant from '../components/AddParticipant';

const Home = () => {
    const [participants, setParticipants] = useState([
        { email: 'kamran@gmail.com' },
        { email: 'sahib@gmail.com' },
        { email: 'suleyman@example.com' },
        { email: 'mamed@memmedov.com' },
    ]);

    const [showAdd, setShowAdd] = useState(false);

    const deleteItem = (email) => {
        setParticipants(participants.filter(item => item.email !== email));
    }

    const addParticipant = (participant) => {
        console.log(participant);
        setParticipants([...participants, participant]);
        setShowAdd(false);
    }

    return (
        <div>
            <Header title="Qaliblərin interaktiv seçimi"
                onToggleAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />

            {showAdd && <AddParticipant onAdd={addParticipant} />}

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
