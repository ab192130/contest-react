import { useState } from "react"
import Button from "./Button"

const AddParticipant = ({ onAdd }) => {
    const [email, setEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            alert('Zəhmət olmasa, e-poçt ünvanını daxil edin');
            return;
        }

        onAdd({ email });

        setEmail('');
    }

    return (
        <form className="space-y-3 mt-5" onSubmit={onSubmit}>
            <div className="mb-3 pt-0">
                <input type="text" placeholder="E-poçt"
                    className="text-lg px-4 py-3 rounded-full placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none w-full"
                    value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className=" flex justify-center">
                <Button label="Əlavə et" type="submit" />
            </div>
        </form>
    )
}

export default AddParticipant
