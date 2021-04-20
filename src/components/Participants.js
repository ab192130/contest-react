import Participant from './Participant';

const Participants = ({ list, onDelete }) => {
    return (
        <div className="p-10">
            {list.map(item => (
                <Participant key={item.email} data={item} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Participants
