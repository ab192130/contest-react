import React from 'react'

const Participant = ({ data, onDelete }) => {
    return (
        <div className="flex flex-wrap items-center group justify-between participant px-5 py-3 cursor-pointer hover:bg-gray-100 rounded-full">
            <div className="flex flex-wrap items-center">
                <img src={`https://i.pravatar.cc/150?u=${data.email}`} className="w-7 h-7 mr-3 rounded-full select-none" alt="" />
                <div className="text-lg">{data.email}</div>
            </div>
            <div className="text-gray-300 hover:text-gray-500 hover:bg-white hover:shadow-md p-1 rounded-full select-none" onClick={() => onDelete(data.email)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
    )
}

export default Participant
